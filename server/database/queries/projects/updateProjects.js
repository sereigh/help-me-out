const db = require('../../index.js');

exports.updateProjects = (project, user, update, cb) => {
  db.Project.findByIdAndUpdate(
    { _id: project, where: { $ref: user } },
    update, { new: true },
    (err, result) => {
      if (err) { cb(err, null); } else { cb(null, result); }
    },
  );
};
