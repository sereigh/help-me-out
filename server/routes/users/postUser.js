const { addUser } = require('../../database/queries/users/addUser.js');

exports.postUser = (req, res) => {
  const user = req.body;
  addUser(user, (err, result) => {
    if (err) { res.status(404).send(err); }
    res.status(201).send(result);
  });
};
