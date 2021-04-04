// const { postUserInfo } = require('../../database/queries/users/postUserInfo.js');

exports.postUser = (req, res) => {
  // const user = req.params.user_id;

  res.status(201).send('post user info got');
};
