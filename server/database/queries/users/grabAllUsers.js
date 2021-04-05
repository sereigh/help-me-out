const db = require('../../index.js');

exports.grabAllUsers = (cb) => {
  db.User.find({}).
  populate('tools').
  populate('projects').
  exec((err, result) => {
    if (err) { cb(err, null); } else { cb(null, result); }
  })
};
