import {MangaTag} from "./MangaTag";
import {MangaState} from "./MangaState";
import {MangaChapter} from "./MangaChapter";

export interface Manga {
    id: string,
    title: string,
    altTitle?: string,
    url: string,
    publicUrl: string,
    rating: number,
    isNsfw?: boolean,
    coverUrl: string,
    largeCoverUrl?: string,
    description?: string,
    tags?: MangaTag[],
    state?: MangaState,
    author?: string,
    chapters?: MangaChapter[]
}

