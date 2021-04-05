const { addProjects } = require('../../database/queries/projects/addProjects.js');
const { addProjectRef } = require('../../database/queries/middleware/addProjectRef.js');

exports.postProjects = (req, res) => {
  const project = req.body;
  const owner = req.params.user_id;
  project.project_owner = owner;

  addProjects(project, (err, result) => {
    if (err) { res.status(404).send(err); } else {
      addProjectRef(owner, result._id);
      res.status(201).send(result);
    }
  });
};
