const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');

const schema = require('./graphql/schema');

const server = new ApolloServer({ schema });
const app = express();

const port = process.env.PORT || 5000;
server.applyMiddleware({ app });

app.listen(port, () => {
  console.log(`Node server started on port: ${port}`);
  console.log(`${server.graphqlPath}`);
});
