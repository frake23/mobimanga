interface Search {
    id: number,
    slug: string,
    cover: string,
    name: string,
    rus_name: string,
    eng_name: string,
    rate_avg: string,
    type_id: number,
    covers: {
        default: string,
        thumbnail: string
    }
}

export type SearchJson = Search[];
