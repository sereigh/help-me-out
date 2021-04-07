const { reportUser } = require('../../database/queries/users/reportUser');

exports.postReport = (req, res) => {
  const user = req.params.user_id;
  const update = { $inc: { report: 1 } };

  reportUser(user, update, (err, result) => {
    if (err) { res.status(404).send(err); }
    res.status(200).send(result);
  });
};
