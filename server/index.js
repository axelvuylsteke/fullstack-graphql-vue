const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const schema = require('./graphql/schema');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const server = new ApolloServer({ schema });
const port = process.env.PORT || 5000;
const dbUri = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@vue-graphql-apollo-k4z2w.mongodb.net/vue-graphql?retryWrites=true&w=majority`;

mongoose
  .connect(dbUri, { useNewUrlParser: true })
  .catch(err => {
    console.log('ERROR: ' + err);
  })
  .then(
    app.listen(port, () => {
      console.log(`Node server started on port: ${port}`);
      console.log(`${server.graphqlPath}`);
    })
  );

app.use(bodyParser.json());
server.applyMiddleware({ app });
