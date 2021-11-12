import {Manga} from "./models/Manga";
import {SortOrder} from "./models/SortOrder";
import {MangaTag} from "./models/MangaTag";

export interface Parser {
    getList: (offset: number, query?: string, sortOrder?: SortOrder, tag?: MangaTag) => Promise<Manga[]>,
    getDetails: (manga: Manga) => Promise<Manga>,
    getPages: () => Promise<void>,
    getTags: () => Promise<void>,
    search: (query: string) => Promise<Manga[]>
}