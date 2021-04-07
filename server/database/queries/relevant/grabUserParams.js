const db = require('../../index');
const { filterParams } = require('../middleware/filterParams');

exports.grabUserParams = (user, cb) => {
  db.User.find({ _id: user })
    .populate({
      path: 'tools',
      where: { help: true },
      select: { _id: 0, tool_name: 1 },
    })
    .populate({
      path: 'projects',
      where: { help: true },
      select: { _id: 0, needed_tools: 1 },
    })
    .exec((err, result) => {
      if (err) return cb(err, null);
      return cb(null, filterParams(result));
    });
};
