const { updateUser } = require('../../database/queries/users/updateUser');

exports.putUser = (req, res) => {
  const user = req.params.user_id;
  const update = req.body;

  updateUser(user, update, (err, result) => {
    if (err) { res.status(404).send(err); }
    res.status(200).send(result);
  });
};
