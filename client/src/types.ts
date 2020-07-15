export interface MovieItemI {
    title: string,
    poster: string,
    type: string,
    id: string,
    year: string
}

export interface SearchResultI {
    search: {
        movies: MovieItemI[],
        totalResults: number
    }
}

export interface MovieI {
     movie: {
         title: string,
         plot: string,
         director: string,
         writer: string,
         genre: string,
         runtime: string,
         year: string,
         poster: string,
         type: string,
         totalSeasons: string,
         released: string
     }
}

export interface MoviePagePropsI {
    id: string,
    match: {
        params: {
            id: string
        }
    }
}