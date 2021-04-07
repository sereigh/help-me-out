const { updateFavorites } = require('../../database/queries/users/updateFavorites');

exports.putFavorites = (req, res) => {
  const user = req.params.user_id;
  const update = req.body.favorite;

  updateFavorites(user, update, (err, result) => {
    if (err) { res.status(404).send(err); }
    res.status(200).send(result);
  });
};
