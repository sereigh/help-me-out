/* eslint-disable no-underscore-dangle */
const db = require("../../index");

exports.validateEmail = (userEmail, cb) => {
  db.User.findOne({ email: userEmail }, (err, result) => {
    if (result === null) return cb("email not found", null);
    return cb(null, result._id);
  });
};
