const db = require('../../index.js');

exports.addProjects = (project, cb) => {
  db.Project(project).save((err, result) => {
    if (err) { cb(err, null); } else { cb(null, result); }
  });
};
