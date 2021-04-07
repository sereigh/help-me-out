const { grabRelevantInfo } = require('../../database/queries/relevant/grabRelevantInfo.js');
const { grabUserNeeds } = require('../../database/queries/relevant/grabUserNeeds.js');

exports.getRelevantInfo = (req, res) => {
  const user = req.params.user_id;
  console.log('user id from req', user)
  getNeeds(user, (err, result) => {
    if (err) {
      return res.status(404).send(err);
    }
    return grabRelevantInfo(result, (error, results) => {
      if (error) { res.status(404).send(error); }
      res.status(200).send(results);
    });
  });
};
