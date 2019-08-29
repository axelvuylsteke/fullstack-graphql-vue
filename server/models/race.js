const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const raceSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  year: {
    type: String,
    required: true
  },
  city: String,
  athletes: [{ type: Schema.Types.ObjectId, ref: 'Athlete' }]
});

module.exports = mongoose.model('Race', raceSchema);
