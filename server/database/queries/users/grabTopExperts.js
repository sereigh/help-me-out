const db = require("../../index");

exports.grabTopExperts = (cb) => {
  db.User.find({})
    .sort({ handy: -1 })
    .limit(5)
    .exec((err, result) => {
      if (err) return cb(err, null);
      return cb(null, result);
    });
};
