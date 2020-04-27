const express = require('express');
const expressGraphQL = require('express-graphql');
const schema = require('./schema');
const app = express();

app.use('/graphql', expressGraphQL({
    schema,
    graphiql: true
}));

const PORT = 5000;

app.listen(PORT, () => { console.log(`server running on port ${PORT}...`) });