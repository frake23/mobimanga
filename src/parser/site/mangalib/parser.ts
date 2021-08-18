import Manga from "../../models/Manga";
import {SearchJson} from "./types";
import SortOrder from "../../models/SortOrder";
import MangaTag from "../../models/MangaTag";
import cheerio from 'cheerio';
import {generateUUID, urlUtils} from "../../utils";
import MangaChapter from "../../models/MangaChapter";

const baseUrl = "https://mangalib.me";

const {absUrl, relUrl} = urlUtils(baseUrl);

export async function getList(offset: number, query?: string, sortOrder?: SortOrder, tag?: MangaTag): Promise<Manga[]> {
    if (query)
        return offset === 0 ? search(query) : [];
    const page = offset / 60; // int
    const url
        = `${baseUrl}/manga-list?dir=${getSortKey(sortOrder)}&page=${page}${tag ? '&includeGenres[]=' + tag.key : ''}`;
    const html = await (await fetch(url)).text();
    const $ = cheerio.load(html);
    const root = $("#manga-list");
    // if (!root) throw Error("Root not found")
    const items = root.find("div.media-cards-grid").first().find("div.media-card-wrap");
    // if (!items) return [];
    const mangas = [] as Manga[];
    for (const element of items) {
        const card = $(element);
        const a = card.find('a.media-card').first();
        const href = relUrl(a.attr('href')!);
        mangas.push({
            id: await generateUUID(href),
            title: card.find("h3").first().text() ?? '',
            coverUrl: absUrl(a.attr('data-src')!),
            rating: -1,
            url: href!,
            publicUrl: absUrl(href),
        })
    }
    return mangas;
}

export async function getDetails(manga: Manga): Promise<Manga> {
    const fullUrl = absUrl(manga.url);
    const html = await (await fetch(`${fullUrl}?section=info`)).text();
    const $ = cheerio.load(html);
    const root = $('#main-page');
    const title = root.find("div.media-name__body").first();
    const info = root.find("div.media-content");
    const chaptersHtml = await (await fetch(`${fullUrl}?section=chapters`)).text();
    const $chapters = cheerio.load(chaptersHtml);
    const scripts = $chapters("script");
    const chapters = [] as MangaChapter[];
    for (const element of scripts) {
        const script = $chapters(element);
        const raw = script.html()?.split('\n') ?? [];
        for (const line of raw) {
            if (line.includes('window.__DATA__')) {
                const json = JSON.parse(line.substring(line.indexOf('=') + 1).substring(0, line.indexOf(';')));
                const list = json.chapters.list;
                const total = list.length;
                for (let i = 0; i < total; i++) {
                    const item = list[i];
                    const chapterId = item.chapter_id;
                    const branchName = item.username;
                    const url =
                        `${manga.url}/v${item.chapter_volume}/c${item.chapter_number}/${item.chapter_string ?? ''}`;
                    let name = item.chapter_name;
                    if (!name || name === "null")
                        name = `Том ${item.chapter_volume} Глава ${item.chapter_number}`;
                    chapters.push({
                        id: '0',
                        url,
                        branch: branchName,
                        number: total - i,
                        name
                    })
                }
                chapters.reverse();
            }
        }
    }

    const tags = [] as MangaTag[];
    info.find('div.media-tags').first().find('a.media-tag-item').map((_, el) => {
        const a = $(el);
        tags.push({
            title: a.text().toLowerCase(),
            key: a.attr('href')!.substring(a.attr('href')!.indexOf('=') + 1)
        })
    });

    return {
        ...manga,
        title: title.find('div.media-name__main').text(),
        altTitle: title.find('div.media-name__alt').text(),
        rating: parseFloat(root.find("div.media-rating__value").first().text())
            || manga.rating,
        author: manga.author,
        tags,
        description: info.find('div.media-description__text').html(),
        chapters
    } as Manga;
}

function getSortKey(sortOrder?: SortOrder) {
    switch (sortOrder) {
        case SortOrder.RATING:
            return "desc&sort=rate";
        case SortOrder.ALPHABETICAL:
            return "asc&sort=name";
        case SortOrder.POPULARITY:
            return "desc&sort=views";
        case SortOrder.UPDATED:
            return "desc&sort=last_chapter_at";
        case SortOrder.NEWEST:
            return "desc&sort=created_at";
        default:
            return "desc&sort=last_chapter_at";
    }
}

async function search(query: string): Promise<Manga[]> {
    const json = await (await fetch(`${baseUrl}/search?type=manga&q=${query}`)).json() as SearchJson;
    const promised = json.map(async (el) => {
        const url = `/${el.slug}`;
        return {
            id: await generateUUID(url),
            url,
            publicUrl: `${baseUrl}/url`,
            title: el.rus_name,
            altTitle: el.name,
            rating: parseFloat(el.rate_avg) || -1,
            coverUrl: `${baseUrl}${el.covers.thumbnail}`,
            largeCoverUrl: `${baseUrl}${el.covers.default}`,
        }
    })
    return Promise.all(promised);
}
