const { decreaseHandy } = require("../../database/queries/handy/decreaseHandy");

exports.handyDown = (req, res) => {
  const user = req.params.user_id;
  const update = { $inc: { handy: -1 } };

  decreaseHandy(user, update, (err, result) => {
    if (err) {
      res.status(404).send(err);
    } else res.status(200).send(result);
  });
};
