const { addNeeds } = require("../../database/queries/projects/addNeeds");

exports.putNeeds = (req, res) => {
  const user = req.params.user_id;
  const project = req.params.project_id;
  const update = req.body.needed_tools;

  addNeeds(project, user, update, (err, result) => {
    if (err) {
      res.status(404).send(err);
    } else res.status(200).send(result);
  });
};
