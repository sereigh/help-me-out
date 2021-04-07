const db = require('../../index');

exports.grabUser = (user, cb) => {
  db.User.findById({ _id: user })
    .populate('tools')
    .populate('projects')
    .exec((err, result) => {
      if (err) return cb(err, null);
      return cb(null, result);
    });
};
