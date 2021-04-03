exports.getUser = (req, res) => {
  const uId = req.query.user_id;

  res.status(200).send('get got');
};
