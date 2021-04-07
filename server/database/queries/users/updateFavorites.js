const db = require('../../index');

exports.updateFavorites = (user, update, cb) => {
  db.User.findByIdAndUpdate(
    { _id: user },
    { $set: { [`${update}`]: true } },
    { new: true },
    (err, result) => {
      if (err) return cb(err, null);
      return cb(null, result);
    },
  );
};
