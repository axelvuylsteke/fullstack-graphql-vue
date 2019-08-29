const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const resultSchema = new Schema({
  athlete: { type: Schema.Types.ObjectId, ref: 'Athlete', required: true },
  race: { type: Schema.Types.ObjectId, ref: 'Race', required: true },
  swim: String,
  t1: String,
  bike: String,
  t2: String,
  run: String,
  total: String
});

module.exports = mongoose.model('Result', resultSchema);
