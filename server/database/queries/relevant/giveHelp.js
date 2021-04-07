const db = require('../../index');

exports.giveHelp = (offeredTools, userZip, cb) => {
  db.Project.find(
    { needed_tools: offeredTools, help: true },
  )
    .populate({
      path: 'project_owner',
      where: { zip: userZip },
      select: {
        name: 1,
        handy: 1,
        zip: 1,
        photo: 1,
      },
    })
    .sort({ updatedAt: -1 })
    .exec((err, result) => {
      if (err) return cb(err, null);
      return cb(null, result);
    });
};
