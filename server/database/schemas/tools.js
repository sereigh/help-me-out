const mongoose = require('mongoose');

exports.toolsSchema = mongoose.Schema({
  tool_id: { type: Number, index: { unique: true } },
  tool_name: String,
  tool_photos: [{ type: String }],
  help: Boolean,
  Favorite: Boolean,
});
