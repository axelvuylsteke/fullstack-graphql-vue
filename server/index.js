const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');
const schema = require('./graphql/schema');
const mongoose = require('mongoose');

const app = express();
const server = new ApolloServer({ schema });
const port = process.env.PORT || 5000;
const dbUri =
  'mongodb+srv://axelixx:Wynn32017@vue-graphql-apollo-k4z2w.mongodb.net/test?retryWrites=true&w=majority';

mongoose.connect(dbUri, { useNewUrlParser: true }).catch(err => {
  console.log('ERROR: ' + err);
});
server.applyMiddleware({ app });

app.listen(port, () => {
  console.log(`Node server started on port: ${port}`);
  console.log(`${server.graphqlPath}`);
});
