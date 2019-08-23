const races = [
  {
    id: 0,
    name: 'Ironman Frankfurt',
    city: 'Frankfurt'
  },
  {
    id: 1,
    name: 'Ironman Malaysia',
    city: 'Malaysia'
  },
  { id: 2, name: 'Ironman Nice', city: 'Nice', athletes: [] }
];

const athletes = [
  { id: 0, name: 'Axel Vuylsteke', country: 'Belgium', races: [] },
  { id: 1, name: 'Caroline Clijsters', country: 'Belgium' },
  { id: 2, name: 'Frederik Van Lierde', country: 'Belgium' }
];

races[2].athletes.push(athletes[0]);
races[2].athletes.push(athletes[1]);
races[2].athletes.push(athletes[2]);

console.log(races[2]);

module.exports = {
  Query: {
    getRace: (root, args, context) => {
      return races[args.id];
    },
    getAthlete: (root, args, context) => {
      return athletes[args.id];
    },
    getAthletes: () => {
      return athletes;
    },
    getRaces: () => {
      return races;
    }
  }
};
