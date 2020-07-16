const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLID
} = require('graphql');

const MovieType = new GraphQLObjectType({
    name: 'Movie',
    fields: () => ({
        title: {
            type: GraphQLString,
            resolve: result => result.Title
        },
        genre: {
            type: GraphQLString,
            resolve: result => result.Genre
        },
        type: {
            type: GraphQLString,
            resolve: result => result.Type
        },
        poster: {
            type: GraphQLString,
            resolve: result => result.Poster
        },
        director: {
            type: GraphQLString,
            resolve: result => result.Director
        },
        writer: {
            type: GraphQLString,
            resolve: result => result.Writer
        },
        year: {
            type: GraphQLString,
            resolve: result => result.Year
        },
        plot: {
            type: GraphQLString,
            resolve: result => result.Plot
        },
        released: {
            type: GraphQLString,
            resolve: result => result.Released
        },
        totalSeasons: {
            type: GraphQLString,
            resolve: result => result.totalSeasons
        },
        runtime: {
            type: GraphQLString,
            resolve: result => result.Runtime
        },
        id: {
            type: GraphQLID,
            resolve: result => result.imdbID
        },
    })
});

module.exports = MovieType;