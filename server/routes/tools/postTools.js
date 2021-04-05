const { addTools } = require('../../database/queries/tools/addTools.js');
const { addToolRef } = require('../../database/queries/middleware/addToolRef.js');

exports.postTools = (req, res) => {
  const tool = req.body;
  const owner = req.params.user_id;
  tool.tool_owner = req.params.user_id;

  addTools(tool, (err, result) => {
    if (err) { res.status(404).send(err); }
    addToolRef(owner, result._id);
    res.status(201).send(result);
  });
};
