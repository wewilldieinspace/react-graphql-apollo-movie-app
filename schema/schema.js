const {
    GraphQLObjectType,
    GraphQLSchema,
    GraphQLString,
    GraphQLID
} = require ('graphql');
const fetch = require('node-fetch')
const config = require('config');
const MovieType = require('./movieSchema');
const SearchType = require('./searchSchema')

const Query = new GraphQLObjectType({

})

module.exports = new GraphQLSchema({
    query: Query
})