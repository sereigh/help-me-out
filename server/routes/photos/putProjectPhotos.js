const { addProjectPhotos } = require('../../database/queries/photos/addProjectPhotos.js');

exports.putProjectPhotos = (req, res) => {
  const user = req.params.user_id;
  const project = req.params.project_id;
  const update = req.body.project_photos;

  addProjectPhotos(project, user, update, (err, result) => {
    if (err) { res.status(404).send(err) }
    else
    res.status(200).send(result);
  });
};
