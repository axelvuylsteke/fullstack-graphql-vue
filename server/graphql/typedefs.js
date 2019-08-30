const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Query {
    athlete(_id: ID!): Athlete
    race(_id: ID!): Race
    result(_id: ID!): Result
    athletes: [Athlete]
    races: [Race]
    results: [Result]
  }
  type Mutation {
    createRace(raceInput: RaceInput!): Race
    createResult(resultInput: ResultInput!): Result
    createAthlete(athleteInput: AthleteInput!): Athlete
  }

  type Race {
    _id: ID!
    name: String!
    year: String!
    city: String
    athletes: [Athlete]
  }

  type Athlete {
    _id: ID!
    name: String!
    country: String
    results: [Result]
  }

  type Result {
    _id: ID!
    athlete: Athlete
    race: Race
    swim: String
    t1: String
    bike: String
    t2: String
    run: String
    total: String
  }

  input AthleteInput {
    name: String!
    country: String
  }

  input RaceInput {
    name: String!
    year: String!
    city: String
  }

  input ResultInput {
    athlete: ID!
    race: ID!
    swim: String
    t1: String
    bike: String
    t2: String
    run: String
    total: String
  }
`;

module.exports = typeDefs;
