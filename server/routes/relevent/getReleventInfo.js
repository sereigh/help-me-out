const { grabReleventInfo } = require('../../database/queries/relevent/grabReleventInfo.js');

exports.getReleventInfo = (req, res) => {

  grabReleventInfo((err, result) => {
    if (err) { res.status(404).send(err); }
    res.status(200).send(result);
  });
};
