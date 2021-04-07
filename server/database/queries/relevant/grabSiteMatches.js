const { getHelp } = require('./getHelp');
const { giveHelp } = require('./giveHelp');

exports.grabSiteMatches = (filter, cb) => {
  const matches = {};

  getHelp(filter.projects, filter.zip, (err, result) => {
    if (err) return cb(err, null);
    matches.getHelp = result;
    return giveHelp(filter.tools, filter.zip, (error, results) => {
      if (error) return cb(error, null);
      matches.giveHelp = results;
      return cb(null, matches);
    });
  });
};
