const { removeTools } = require('../../database/queries/tools/removeTools.js');

exports.deleteTools = (req, res) => {
  const user = req.params.user_id;
  const tool = req.params.tool_id;

  removeTools(tool, user, (err, result) => {
    if (err) { res.status(404).send(err) }
    else
    res.status(204).end();
  });
};
