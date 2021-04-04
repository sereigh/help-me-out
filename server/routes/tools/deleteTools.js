// const { deleteTools } = require('../../database/queries/tools/deleteTools.js');

exports.deleteTools = (req, res) => {
  // const uId = req.params.user_id;
  res.status(204).send('delete tools recieved');
};
