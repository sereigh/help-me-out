const db = require('../../index.js');

exports.addUserPhotos = (id, update, cb) => {

  db.User.findByIdAndUpdate({ _id: id }, update, { new: true }, (err, result) => {
    if (err) { cb(err, null); } else { cb(null, result); }
  });
};
