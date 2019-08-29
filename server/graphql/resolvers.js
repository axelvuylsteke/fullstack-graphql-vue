const Race = require('../models/race');
const Athlete = require('../models/athlete');
const Result = require('../models/result');

module.exports = {
  Query: {
    athlete: (root, args, context) => {
      return athletes.find(athlete => athlete._id == args._id);
      // return await Athlete.findOne({ _id: args.id });
    },
    race: async (root, args) => {
      return races.find(race => race._id == args._id);
      // return await Race.findOne({ _id: args.id });
    },
    result: async (root, args) => {
      return results.find(result => result._id == args._id);
      // return await Result.findOne({ _id: args.id });
    },
    athletes: async root => {
      return athletes;
      // return await Athlete.find();
    },
    races: async root => {
      return races;
      // return await Race.find();
    },
    results: async root => {
      return results;
      // return await Results.find();
    }
  },
  Mutation: {
    createRace: async (root, args, context) => {
      const race = new Race({
        name: args.raceInput.name,
        year: args.raceInput.year,
        city: args.raceInput.city
      });
      return race
        .save()
        .then(result => {
          console.log(result);
          return { ...result._doc };
        })
        .catch(err => {
          console.log(err);
          throw err;
        });
    },
    createAthlete: async (root, args, context) => {
      const athlete = new Athlete({
        name: args.athleteInput.name,
        country: args.athleteInput.country
      });
      return athlete
        .save()
        .then(result => {
          console.log(result);
          return { ...result._doc };
        })
        .catch(err => {
          console.log(err);
          throw err;
        });
    },
    createResult: async (root, args, context) => {
      console.log('Starting create result');
      const result = {
        _id: Math.random().toString(),
        athleteId: args.resultInput.athleteId,
        raceId: args.resultInput.raceId,
        swim: args.resultInput.swim,
        t1: args.resultInput.t1,
        bike: args.resultInput.bike,
        t2: args.resultInput.t2,
        run: args.resultInput.run,
        total: args.resultInput.total
      };
      return result;
    }
  }
};
