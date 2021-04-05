const db = require('../../index.js');

exports.removeProjects = (project, user, cb) => {

  db.Project.findByIdAndDelete({ _id: project, where: { $ref: user } }, (err, result) => {
    if (err) { cb(err, null); } else { cb(null, result); }
  });
};
