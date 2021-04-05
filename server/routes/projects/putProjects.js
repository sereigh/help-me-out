const { updateProjects } = require('../../database/queries/projects/updateProjects.js');

exports.putProjects = (req, res) => {
  const user = req.params.user_id;
  const project = req.params.project_id;
  const update = req.body;

  updateProjects(project, user, update, (err, result) => {
    if (err) { res.status(404).send(err) }
    else
    res.status(200).send(result);
  });
};
