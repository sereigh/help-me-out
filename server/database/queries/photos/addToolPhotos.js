const db = require('../../index.js');

exports.addToolPhotos = (tool, user, update, cb) => {

  db.Tool.findByIdAndUpdate({ _id: tool, where: { $ref: user } }, { $push: { tool_photos: update } }, { new: true }, (err, result) => {
    if (err) { cb(err, null); } else { cb(null, result); }
  }).exec();
};
