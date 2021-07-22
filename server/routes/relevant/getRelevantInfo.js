const {
  grabRelevantInfo,
} = require("../../database/queries/relevant/grabRelevantInfo");

exports.getRelevantInfo = (req, res) => {
  const user = req.params.user_id;

  grabRelevantInfo(user, (err, result) => {
    if (err) {
      res.status(404).send(err);
    } else res.status(200).send(result);
  });
};
