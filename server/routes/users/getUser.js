// const { getUserInfo } = require('../../database/queries/users/getUserInfo.js');

exports.getUser = (req, res) => {
  // const user = req.params.user_id;
  res.status(200).send('get user info got');
};
