const mongoose = require('mongoose');

exports.toolsSchema = mongoose.Schema({
  tool_name: String,
  tool_photos: [{ type: String }],
  tool_owner: [{
    type: mongoose.Schema.Types.Number,
    ref: 'User',
  }],
  help: { type: Boolean, default: false },
});
