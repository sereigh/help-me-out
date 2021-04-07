const db = require('../../index');

exports.addProjectPhotos = (project, user, update, cb) => {
  db.Project.findByIdAndUpdate(
    { _id: project, where: { $ref: user } },
    { $push: { project_photos: update } },
    { new: true },
    (err, result) => {
      if (err) return cb(err, null);
      return cb(null, result);
    },
  ).exec();
};
