const Race = require('../models/race');
const Athlete = require('../models/athlete');
const Result = require('../models/result');

module.exports = {
  Query: {
    athlete: async (root, args, context) => {
      return await Athlete.findOne({ _id: args._id });
    },
    race: async (root, args) => {
      return await Race.findOne({ _id: args._id });
    },
    result: async (root, args) => {
      return await Result.findOne({ _id: args._id });
    },
    athletes: async () => {
      return await Athlete.find();
    },

    races: async () => {
      return await Race.find();
    },

    results: async () => {
      return await Result.find();
    }
  },
  Mutation: {
    createRace: async (root, args, context) => {
      const race = new Race({
        name: args.raceInput.name,
        year: args.raceInput.year,
        city: args.raceInput.city
      });
      return race.save();
    },
    createAthlete: async (root, args, context) => {
      const athlete = new Athlete({
        name: args.athleteInput.name,
        country: args.athleteInput.country
      });
      return athlete.save();
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
      updatedAthlete = await Athlete.findById(resultRace.athlete);
      updatedRace = await Race.findById(resultRace.race);
      if (!updatedAthlete || !updatedRace) {
        throw new Error('Athlete or Race not existing');
      } else {
        return resultRace.save().then(result => {
          updatedAthlete.results.push(result._id);
          updatedRace.athletes.push(result.athlete);
          updatedAthlete.save();
          updatedRace.save();
          return result;
        });
      }
    }
  }
};
