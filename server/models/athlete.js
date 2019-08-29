const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const athleteSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  country: String,
  results: [{ type: Schema.Types.ObjectId, ref: 'Result' }]
});

module.exports = mongoose.model('Athlete', athleteSchema);
