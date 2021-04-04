// const { deleteProjects } = require('../../database/queries/projects/deleteProjects.js');

exports.deleteProjects = (req, res) => {
  // const uId = req.params.user_id;
  res.status(204).send('delete projects recieved');
};
