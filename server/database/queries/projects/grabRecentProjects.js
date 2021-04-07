const db = require('../../index');

exports.grabRecentProjects = (cb) => {
  db.Project.find({})
    .sort({ updatedAt: -1 })
    .exec((err, result) => {
      if (err) return cb(err, null);
      return cb(null, result);
    });
};
