const db = require('../../index.js');

exports.updateTools = (tool, user, update, cb) => {

  db.Tool.findByIdAndUpdate({ _id: tool, where: { $ref: user } }, update, { new: true }, (err, result) => {
    if (err) { cb(err, null); } else { cb(null, result); }
  });
};
