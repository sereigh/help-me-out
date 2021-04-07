const mongoose = require('mongoose');

exports.usersSchema = mongoose.Schema({
  name: String,
  zip: { type: Number, default: 37013 },
  password: String,
  email: String,
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
  favorites: {
    type: String,
    default: {},
  },
}, { timestamps: true });
