import { gql } from 'apollo-boost'

export const filmQuery =  gql`
    query Movie($id: ID!) {
        movie(id: $id) {
            title,
            plot,
            director,
            writer,
            genre,
            runtime,
            year,
            poster,
            type,
            totalSeasons,
            released 
        } 
    }    
`