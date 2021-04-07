const { getHelp } = require('./getHelp.js');
const { giveHelp } = require('./giveHelp.js');

exports.grabRelevantInfo = (filter, cb) => {

  const get = getHelp(filter.projects, filter.zip, (err, result) => {
    if (err) { return console.error(err) }
    else { return result }
  })

  const give = giveHelp(filter.tools, filter.zip, (err, result) => {
    if (err) { return console.error(err) }
    else { return result }
  })

  // favorites placeholder

  return cb(null, { getHelp: get, giveHelp: give })
};
