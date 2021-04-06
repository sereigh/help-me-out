const { grabRelevantInfo } = require('../../database/queries/relevant/grabRelevantInfo.js');

exports.getRelevantInfo = (req, res) => {

  grabRelevantInfo((err, result) => {
    if (err) { res.status(404).send(err); }
    res.status(200).send(result);
  });
};
