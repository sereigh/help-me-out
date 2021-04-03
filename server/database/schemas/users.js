const mongoose = require('mongoose');

exports.usersSchema = mongoose.Schema({
  user_id: { type: Number, index: { unique: true } },
  name: String,
  zip: Number,
  password: String,
  handy: { type: Number, default: 0 },
  report: { type: Number, default: 0 },
  tools: [{
    type: mongoose.Schema.Types.Number,
    ref: 'Tool',
  }],
  projects: [{
    type: mongoose.Schema.Types.Number,
    ref: 'Project',
  }],
});
