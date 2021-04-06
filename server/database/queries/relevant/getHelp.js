const db = require('../../index.js');

exports.getHelp = (tools_needed, zip, cb) => {

  db.Tool.find(
    { tool_name: tools_needed, help: true }).
    populate({
      path: 'tool_owner',
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
