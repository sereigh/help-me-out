const mongoose = require('mongoose');

exports.favoritesSchema = mongoose.Schema({
  favorite_name: String,
  favorite_description: String,
  favorite_owner: String,
  favorite_handy: Number,
  favorite_photo: String,
  favorite_photos: [{ type: String }],
}, { timestamps: true });
