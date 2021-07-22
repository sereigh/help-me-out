const { grabUserParams } = require("./grabUserParams");
const { grabSiteMatches } = require("./grabSiteMatches");

exports.grabRelevantInfo = (user, cb) => {
  grabUserParams(user, (err, result) => {
    if (err) return cb(err, null);
    return grabSiteMatches(result, (error, results) => {
      if (error) return cb(error, null);
      return cb(null, results);
    });
  });
};
