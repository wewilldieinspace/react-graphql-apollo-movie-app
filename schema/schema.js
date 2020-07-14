const {
    GraphQLObjectType,
    GraphQLSchema,
    GraphQLString,
    GraphQLID
} = require ('graphql');
const fetch = require('node-fetch');
const config = require('config');

const MovieType = require('./movieSchema');
const SearchType = require('./searchSchema');


// get config
const key = config.get('omdbKey');
const url = config.get('omdbUrl');


// api fetch
const fetchSearch = title => {
    return fetch(`${url}?s=${title}&${key}`)
        .then(res => res.json())
};
const fetchMovie = id => {
    return fetch(`${url}?i=${id}&${key}`)
        .then(res => res.json());
};


const Query = new GraphQLObjectType({
    name: 'Query',
    fields: {
        search: {
            type: SearchType,
            args: {
                title: { type: GraphQLString }
            },
            resolve: (parent, args) => fetchSearch(args.title)
        },
        movie: {
            type: MovieType,
            args: {
                id: { type: GraphQLID }
            },
            resolve: (parent, args) => fetchMovie(args.id)
        }
    }
});

module.exports = new GraphQLSchema({
    query: Query
});