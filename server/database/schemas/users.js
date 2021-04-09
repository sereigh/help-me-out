const mongoose = require('mongoose');

exports.usersSchema = mongoose.Schema({
  name: String,
  zip: { type: Number, default: 80301 },
  password: String,
  email: String,
  photo: { type: String, default: 'http://via.placeholder.com/640x360' },
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
  favorites: {},
  reported: {},
  upvoted: {},
  downvoted: {},
}, { timestamps: true });
