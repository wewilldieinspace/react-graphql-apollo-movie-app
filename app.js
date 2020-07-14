const app = require('express')();
const graphqlHTTP = require('express-graphql');
const cors = require('cors');
const config = require('config');
const schema = require('./schema/schema')

const PORT = config.get('port');

app.use('/graphql', cors(), graphqlHTTP({
    graphiql: true,
    schema
}));

app.listen(PORT, () => {
    console.log(`server has been started on ${PORT}`)
});