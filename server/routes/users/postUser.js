const {
  validateUser,
} = require("../../database/queries/middleware/validateUser");

exports.postUser = (req, res) => {
  validateUser(req.body, req.body.email, (err, result) => {
    if (err) {
      res.status(404).send(err);
    }
    res.status(200).send(result);
  });
};
