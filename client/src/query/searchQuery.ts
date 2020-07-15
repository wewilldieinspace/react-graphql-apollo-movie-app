import { gql } from 'apollo-boost'

export const Search = gql`
    query Search($title: String!) {
        search(title: $title) {
            movies {
                title,
                year,
                type,
                poster,
                id
            },
        totalResults 
        } 
    }
`