export interface FilmItemI {
    title: string,
    poster: string,
    type: string,
    id: string,
    year: string
}

export interface SearchResultI {
    search: {
        movies: FilmItemI[],
        totalResults: number
    }
}

export interface SearchReqTu {

}