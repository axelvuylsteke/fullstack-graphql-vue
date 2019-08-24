const mongoose = require('mongoose');
const schema = mongoose.schema;

const raceSchema = new schema({
  name: String,
  city: String,
  athleteId: String
});

module.exports = mongoose.model('Race', raceSchema);
