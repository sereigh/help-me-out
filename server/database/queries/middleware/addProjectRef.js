const db = require('../../index.js');

exports.addProjectRef = (user, project) => {
  db.User.findByIdAndUpdate(
    { _id: user },
    { $push: { projects: project } },
    { upsert: true },
  ).exec();
};
