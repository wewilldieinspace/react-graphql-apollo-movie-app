const {
    GraphQLObjectType,
    GraphQLList,
    GraphQLInt
} = require ('graphql');
const MovieType = require('./movieSchema');

const SearchType = new GraphQLObjectType({
    name: 'Search',
    fields: () => ({
        totalResult: {
            type: GraphQLInt,
            resolve: result => result.totalResults
        },
        movies: {
            type: new GraphQLList(MovieType),
            resolve: result => result.Search
        }
    })
});

module.exports = SearchType;