// const { getUserInfo } = require('../../database/queries/getUserInfo.js');

exports.getUser = (req, res) => {
  // const uId = req.query.user_id;
  console.log('getUser')
  res.status(200).send('get got');
};
