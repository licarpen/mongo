const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  water:{
    type: Number,
    required: true
  },
  light:{
    type: String,
    required: true
  },
  pH:{
    type: Number,
    required: true
  }
});

module.exports = mongoose.model('Plant', schema);
