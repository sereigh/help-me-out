const mongoose = require('mongoose');

exports.usersSchema = mongoose.Schema({
  name: String,
  zip: Number,
  password: String,
  photo: String,
  handy: { type: Number, default: 0 },
  report: { type: Number, default: 0 },
  tools: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Tool',
  }],
  projects: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Project',
  }],
  favorites: { type: String },
}, { timestamps: true });
