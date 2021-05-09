const {
  grabTopExperts,
} = require("../../database/queries/users/grabTopExperts");

exports.getTopExperts = (req, res) => {
  grabTopExperts((err, result) => {
    if (err) {
      res.status(404).send(err);
    }
    res.status(200).send(result);
  });
};
