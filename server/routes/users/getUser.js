const { grabUser } = require('../../database/queries/users/grabUser');

exports.getUser = (req, res) => {
  const user = req.params.user_id;

  grabUser(user, (err, result) => {
    if (err) { res.status(404).send(err); }
    res.status(200).send(result);
  });
};
