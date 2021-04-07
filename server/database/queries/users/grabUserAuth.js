const db = require('../../index.js');

exports.grabUserAuth = (email, cb) => {
  db.User.find({email: email}).
  exec((err, result) => {
    if (err) { cb(err, null); } else {
      if (result.length === 0) {
        return cb(null, false)
      }
      else { cb(null, result); }
    }
  })
};
