const mongoose = require('mongoose');

exports.projectsSchema = mongoose.Schema({
  project_name: String,
  project_description: String,
  project_owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  help: { type: Boolean, default: false },
  project_photos: [{ type: String }],
}, { timestamps: true });
