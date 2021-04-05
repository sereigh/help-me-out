const db = require('../../index.js');

exports.addProjectPhotos = (project, user, update, cb) => {

  db.Project.findByIdAndUpdate({ _id: project, where: { $ref: user } }, { $push: { project_photos: update } }, { new: true }, (err, result) => {
    if (err) { cb(err, null); } else { cb(null, result); }
  }).exec();
};
