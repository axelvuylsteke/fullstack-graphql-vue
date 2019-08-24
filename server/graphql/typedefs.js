const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Query {
    race(id: ID!): Race
    athlete(id: ID!): Athlete
    athletes: [Athlete]
    races: [Race]
  }

  type Race {
    id: ID!
    name: String
    city: String
    athletes: [Athlete]
  }

  type Athlete {
    id: ID!
    name: String
    country: String
    races: [Race]
  }
`;

module.exports = typeDefs;
