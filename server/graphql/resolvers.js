const races = [
  {
    id: 10,
    name: 'Ironman Frankfurt',
    city: 'Frankfurt'
  },
  {
    id: 11,
    name: 'Ironman Malaysia',
    city: 'Malaysia'
  },
  { id: 12, name: 'Ironman Nice', city: 'Nice', athleteId: [] }
];

const athletes = [
  { id: 100, name: 'Axel Vuylsteke', country: 'Belgium', raceId: [] },
  { id: 101, name: 'Caroline Clijsters', country: 'Belgium' },
  { id: 102, name: 'Frederik Van Lierde', country: 'Belgium' }
];

races[2].athleteId.push(athletes[0].id);
races[2].athleteId.push(athletes[1].id);
races[2].athleteId.push(athletes[2].id);

athletes[0].raceId.push(races[0].id);
athletes[0].raceId.push(races[2].id);

module.exports = {
  Query: {
    race: (root, args, context) => {
      return races.find(race => race.id == args.id);
    },
    athlete: (root, args, context) => {
      return athletes.find(athlete => athlete.id == args.id);
    },
    athletes: () => {
      return athletes;
    },
    races: () => {
      return races;
    }
  }
};
