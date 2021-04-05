const db = require('../../index.js');

exports.removeTools = (tool, user, cb) => {

  db.Tool.findByIdAndDelete({ _id: tool, where: { $ref: user } }, (err, result) => {
    if (err) { cb(err, null); } else { cb(null, result); }
  });
};
