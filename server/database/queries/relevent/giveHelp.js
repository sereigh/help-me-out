const db = require('../../index.js');

exports.giveHelp = (hasTools, zip, cb) => {

  db.Project.find(
    { needed_tools: hasTools, help: true }).
    populate({
      path: 'project_owner',
      where: { zip: zip },
      select: {
        name: 1,
        handy: 1,
        zip: 1,
        photo: 1
      }
    }).
    exec((err, result) => {
      if (err) { return cb(err, null) }
      else { return cb(null, result) }
    })
}
