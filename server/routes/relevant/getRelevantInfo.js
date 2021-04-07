const { grabRelevantInfo } = require('../../database/queries/relevant/grabRelevantInfo.js');
const { getNeeds } = require('../../database/queries/relevant/getNeeds.js');

exports.getRelevantInfo = (req, res) => {
  const user = req.params.user_id;

  getNeeds(user, (err, result) => {
    if (err) { console.error(err)
    } else {
      grabRelevantInfo(result, (err, result) => {
        if (err) { res.status(404).send(err); }
        res.status(200).send(result);
      });
    }
  })

};
