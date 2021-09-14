import SortOrder from "./SortOrder";
import MangaTag from "./MangaTag";

export interface MangaFilter {
    sortOrder: SortOrder,
    tag?: MangaTag
}

