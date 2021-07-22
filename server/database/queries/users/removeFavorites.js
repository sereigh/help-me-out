const db = require("../../index");

exports.removeFavorites = (user, favorite, cb) => {
  db.User.findByIdAndUpdate(
    { _id: user },
    { $unset: { [`${favorite}`]: 1 } },
    { new: true },
    (err, result) => {
      if (err) return cb(err, null);
      return cb(null, result);
    }
  );
};
