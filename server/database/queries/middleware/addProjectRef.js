const db = require('../../index');

exports.addProjectRef = (user, project) => {
  db.User.findByIdAndUpdate(
    { _id: user },
    { $push: { projects: project } },
    { upsert: true },
  ).exec();
};
