const db = require('./server/database/index.js');

const aggFunc = (zip, tool, cb) => {

  const pipeline = [
    { $match: { zip: zip } },
    { $project: { _id: 1, name: 1, photo: 1, handy: 1 } },
    // { $group: {  } },
    // { $lookup:  {
    //   from: 'tools',
    //   localField: 'tools',
    //   foreignField: 'tool_owner',
    //   as: 'tools'
    // }}
    // { $count: 'total' },
    // { $sort: { updatedAt: -1 } },
    // { $limit: 10 },
    // { $out: 'byZipcode' }
  ]

  // db.User.aggregate([
  //   { $match: { zip: zip } },
  //   { $project: { _id: 1, name: 1, photo: 1, handy: 1, tools: 1, projects: 1 } },
  // ]).populate({
  //   path: 'projects',
  //   match: { help: {$eq: true } }
  //  }, (err, result) => {
  //   if (err) { return cb(err, null) }
  //   else { return cb(null, result) }
  // })
  const tools = db.Tool.find({tool_name: tool, help: true}).
  populate({ path: 'tool_owner', where: { zip: zip }, select: { name: 1, handy: 1, zip: 1, photo: 1} })

  const projects = db.Project.find(
    { help: true}).
    populate({ path: 'project_owner', where: { zip: zip }, select: { name: 1, handy: 1, zip: 1, photo: 1 }})

    return { getHelp: tools, giveHelp: projects }
  };

  // db.User.find({zip: zip}).
  // populate({ path: 'tools', help: { $ne: false } }).
  // exec((err, result) => {
  //   if (err) { return cb(err, null) }
  //   else { return cb(null, result) }
  // })

// user.zip, user.project.needed_tools, user.tools.help=true
aggFunc(37255, ["hammer", "crowbar"], (err, result) => {
  if (err) { return console.error(err) }
  else { return console.log(result) }
})