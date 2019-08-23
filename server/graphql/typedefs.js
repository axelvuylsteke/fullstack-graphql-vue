const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Query {
    getRace(id: ID!): Race
    getAthlete(id: ID!): Athlete
    getAthletes: [Athlete]
    getRaces: [Race]
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
