const mongoose = require('mongoose');

exports.usersSchema = mongoose.Schema({
  name: String,
  zip: Number,
  password: String,
  photo: { type: String, default: 'https://tinyurl.com/help-me-out-app' },
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
  favorites: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Favorite',
  }],
}, { timestamps: true });
