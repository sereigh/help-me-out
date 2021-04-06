const { getHelp } = require('./getHelp.js');
const { giveHelp } = require('./giveHelp.js');

exports.grabReleventInfo = (filter, cb) => {

  const getHelp = getHelp(info, (err, result) => {
    if (err) { return console.error(err) }
    else { return result }
  })

  const giveHelp = giveHelp(info,  (err, result) => {
    if (err) { return console.error(err) }
    else { return result }
  })

  // favorites placeholder

  return { getHelp: getHelp, giveHelp: giveHelp }
};
