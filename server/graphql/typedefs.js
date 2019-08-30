const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Query {
    athlete(_id: ID!): Athlete
    race(_id: ID!): Race
    result(_id: ID!): Result
    user(_id: ID!): User
    athletes: [Athlete]
    races: [Race]
    results: [Result]
    users: [User]
  }
  type Mutation {
    createRace(raceInput: RaceInput!): Race
    createResult(resultInput: ResultInput!): Result
    createAthlete(athleteInput: AthleteInput!): Athlete
    createUser(userInput: UserInput!): User
  }

  type User {
    _id: ID!
    firstName: String!
    lastName: String!
    email: String!
    role: String!
    athlete: Athlete
  }
  type Athlete {
    _id: ID!
    name: String!
    country: String
    results: [Result]
  }

  type Race {
    _id: ID!
    name: String!
    year: String!
    city: String
    athletes: [Athlete]
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

  input UserInput {
    firstName: String!
    lastName: String!
    email: String!
    role: String!
  }

  input AthleteInput {
    user: ID!
    name: String!
    country: String
  }

  input RaceInput {
    user: ID!
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
