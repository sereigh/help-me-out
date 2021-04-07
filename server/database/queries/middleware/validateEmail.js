/* eslint-disable no-underscore-dangle */
const db = require('../../index.js');

exports.validateEmail = (userEmail, cb) => {
  db.User.findOne({ email: userEmail }, (err, result) => {
    if (result === null) { return cb('email not', null); } return cb(null, result._id);
  });
};
