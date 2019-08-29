const Race = require('../models/race');
const Athlete = require('../models/athlete');
const Result = require('../models/result');

module.exports = {
  Query: {
    athlete: async (root, args, context) => {
      return await Athlete.findOne({ _id: args._id });
    },
    race: async (root, args) => {
      await Race.findOne({ _id: args._id });
    },
    result: async (root, args) => {
      return await Result.findOne({ _id: args._id });
    },
    athletes: async () => {
      const athletes = await Athlete.find();
      return athletes.map(athlete => {
        return { ...athlete._doc };
      });
    },
    races: async () => {
      const races = await Race.find();
      return races.map(race => {
        return { ...race._doc };
      });
    },
    results: async () => {
      const results = await Result.find();
      return results.map(result => {
        return { ...result._doc };
      });
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
      const resultRace = new Result({
        athlete: args.resultInput.athlete,
        race: args.resultInput.race,
        swim: args.resultInput.swim,
        t1: args.resultInput.t1,
        bike: args.resultInput.bike,
        t2: args.resultInput.t2,
        run: args.resultInput.run,
        total: args.resultInput.total
      });
      return resultRace
        .save()
        .then(result => {
          console.log(result);
          return { ...result._doc };
        })
        .catch(err => {
          console.log(err);
          throw err;
        });
    }
  }
};
