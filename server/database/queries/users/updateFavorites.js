const db = require('../../index');

exports.updateFavorites = (user, favorite, cb) => {
  db.User.findByIdAndUpdate(
    { _id: user },
    { $set: { [`${favorite}`]: true } },
    { new: true },
    (err, result) => {
      if (err) return cb(err, null);
      return cb(null, result);
    },
  );
};
