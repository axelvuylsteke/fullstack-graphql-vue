const mongoose = require('mongoose');
const schema = mongoose.schema;

const athleteSchema = new schema({
  name: String,
  country: String,
  raceId: String
});

module.exports = mongoose.model('Athlete', athleteSchema);
