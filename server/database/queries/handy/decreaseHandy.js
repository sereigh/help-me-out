const db = require('../../index.js');

exports.decreaseHandy = (user, update, cb) => {
  db.User.findByIdAndUpdate({ _id: user }, update, { new: true }, (err, result) => {
    if (err) { cb(err, null); } else { cb(null, result); }
  });
};
