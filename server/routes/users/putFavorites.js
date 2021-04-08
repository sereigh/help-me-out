const { updateFavorites } = require('../../database/queries/users/updateFavorites');

exports.putFavorites = (req, res) => {
  const user = req.params.user_id;
  const favorite = `favorites.${req.body.favorite}`;

  updateFavorites(user, favorite, (err, result) => {
    if (err) { res.status(404).send(err); }
    res.status(200).send(result);
  });
};
