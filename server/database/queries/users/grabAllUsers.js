const db = require("../../index");

exports.grabAllUsers = (cb) => {
  db.User.find({})
    .populate("tools")
    .populate("projects")
    .sort({ updatedAt: -1 })
    .exec((err, result) => {
      if (err) return cb(err, null);
      return cb(null, result);
    });
};
