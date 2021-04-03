const mongoose = require('mongoose');

exports.projectsSchema = mongoose.Schema({
  project_id: { type: Number, index: { unique: true } },
  project_name: String,
  project_description: String,
  project_photos: [{ type: String }],
  help: Boolean,
  favorite: Boolean,
});
