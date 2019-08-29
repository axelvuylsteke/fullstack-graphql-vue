const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Athlete = require('../models/athlete');
const Race = require('../models/race');

const resultSchema = new Schema({
  // athlete: { type: mongoose.Schema.Types.ObjectId, ref: 'Athlete' },
  // race: { type: mongoose.Schema.Types.ObjectId, ref: 'Race' },
  athleteId: {
    type: String,
    required: true
  },
  raceId: {
    type: String,
    required: true
  },
  swim: String,
  t1: String,
  bike: String,
  t2: String,
  run: String,
  total: String
});

module.exports = mongoose.model('Result', resultSchema);
