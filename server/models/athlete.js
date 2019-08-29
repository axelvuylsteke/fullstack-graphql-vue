const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Race = require('../models/race');

const athleteSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  country: String
  // races: [{ race: { type: mongoose.Schema.Types.ObjectId, ref: 'Race' } }]
});

module.exports = mongoose.model('Athlete', athleteSchema);
