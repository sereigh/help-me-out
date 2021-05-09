const db = require("../../index");

exports.addUser = (user, cb) => {
  db.User(user).save((err, result) => {
    if (err) return cb(err, null);
    return cb(null, result);
  });
};
