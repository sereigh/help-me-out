const db = require('../../index.js');

exports.getNeeds = (user, cb) => {
  db.User.find({ _id: user }).
  populate({
    path: 'tools',
    where: { help: true },
    select: { _id: 0, tool_name: 1 }
  }).
  populate({
    path: 'projects',
    where: { help: true },
    select: { _id: 0, needed_tools: 1 }
  }).
  exec((err, result) => {
    if (err) { cb(err, null);
    } else {
      const filter = {
        tools: result[0].tools.map((item) => item.tool_name),
        projects: result[0].projects.map((item) => item.needed_tools).flat(),
        zip: result[0].zip
      };
      cb(null, filter);
    }
  })
};
