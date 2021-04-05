const db = require('../../index.js');

exports.addUser = (user, cb) => {
  db.User(user).save((err, result) => {
    if (err) { cb(err, null); } else { cb(null, result); }
  });
};
