const { grabAllUsers } = require('../../database/queries/users/grabAllUsers.js');

exports.getAllUsers = (req, res) => {

  grabAllUsers((err, result) => {
    if (err) { res.status(404).send(err); }
    res.status(200).send(result);
  });
};
