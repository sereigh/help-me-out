const db = require("../../index");

exports.increaseHandy = (user, update, cb) => {
  db.User.findByIdAndUpdate(
    { _id: user },
    update,
    { new: true },
    (err, result) => {
      if (err) {
        cb(err, null);
      } else {
        cb(null, result);
      }
    }
  );
};
