const {
  addToolPhotos,
} = require("../../database/queries/photos/addToolPhotos");

exports.putToolPhotos = (req, res) => {
  const user = req.params.user_id;
  const tool = req.params.tool_id;
  const update = req.body.tool_photos;

  addToolPhotos(tool, user, update, (err, result) => {
    if (err) {
      res.status(404).send(err);
    } else res.status(200).send(result);
  });
};
