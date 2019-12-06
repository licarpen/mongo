const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  depth: {
    type: Number,
    required: true,
    min: 0
  },
  moistureContent:{
    type: Number,
    required: true,
    min: 0,
    max: 100
  },
  faceted:{
    type: Boolean,
    required: true
  }
});

module.exports = mongoose.model('Snow', schema);
