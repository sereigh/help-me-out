const db = require('../../index');

exports.addToolPhotos = (tool, user, update, cb) => {
  db.Tool.findByIdAndUpdate(
    { _id: tool, where: { $ref: user } },
    { $push: { tool_photos: update } },
    { new: true },
    (err, result) => {
      if (err) return cb(err, null);
      return cb(null, result);
    },
  ).exec();
};
