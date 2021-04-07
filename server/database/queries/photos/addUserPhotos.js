const db = require('../../index');

exports.addUserPhotos = (id, update, cb) => {
  db.User.findByIdAndUpdate(
    { _id: id },
    update,
    { new: true },
    (err, result) => {
      if (err) return cb(err, null);
      return cb(null, result);
    },
  );
};
