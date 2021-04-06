const db = require('../../index.js');

exports.addNeeds = (project, user, update, cb) => {

  db.Project.findByIdAndUpdate({ _id: project, where: { $ref: user } }, { $push: { needed_tools: update } }, { new: true }, (err, result) => {
    if (err) { cb(err, null); } else { cb(null, result); }
  }).exec();
};
