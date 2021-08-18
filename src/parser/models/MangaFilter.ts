import SortOrder from "./SortOrder";
import MangaTag from "./MangaTag";

interface MangaFilter {
    sortOrder: SortOrder,
    tag?: MangaTag
}

export default MangaFilter;
