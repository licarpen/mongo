const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  red: {
    type: Number,
    required: true,
    min: 0,
    max: 255
  },
  green: {
    type: Number,
    required: true
  },
  blue: {
    type: Number,
    required: true
  }
});

module.exports = mongoose.model('Color', schema);
