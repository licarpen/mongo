const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  age:{
    type: Number,
    required: true,
    min: 18
  },
  sledPhoto:{
    type: Boolean,
    required: true,
  },
  gunPhoto:{
    type: Boolean,
    required: true,
  }
});

module.exports = mongoose.model('BumbleProfile', schema);
