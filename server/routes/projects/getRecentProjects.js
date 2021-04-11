const {
  grabRecentProjects,
} = require("../../database/queries/projects/grabRecentProjects");

exports.getRecentProjects = (req, res) => {
  grabRecentProjects((err, result) => {
    if (err) {
      res.status(404).send(err);
    }
    res.status(200).send(result);
  });
};
