const { addUserPhotos } = require('../../database/queries/photos/addUserPhotos');

exports.putUserPhotos = (req, res) => {
  const user = req.params.user_id;
  const update = req.body;

  addUserPhotos(user, update, (err, result) => {
    if (err) { res.status(404).send(err); } else res.status(200).send(result);
  });
};
