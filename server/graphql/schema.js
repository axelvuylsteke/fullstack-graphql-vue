const typeDefs = require('./typedefs');
const resolvers = require('./resolvers');
const { makeExecutableSchema } = require('graphql-tools');

const schema = makeExecutableSchema({
  typeDefs,
  resolvers
});

module.exports = schema;
