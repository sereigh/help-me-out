const {
  removeFavorites,
} = require("../../database/queries/users/removeFavorites");

exports.deleteFavorites = (req, res) => {
  const user = req.params.user_id;
  const favorite = `favorites.${req.body.favorite}`;

  removeFavorites(user, favorite, (err, result) => {
    if (err) {
      res.status(404).send(err);
    } else res.status(200).send(result);
  });
};
