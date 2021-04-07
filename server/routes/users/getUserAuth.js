const { grabUserAuth } = require('../../database/queries/users/grabUserAuth.js');

exports.getUserAuth = (req, res) => {
  const user = req.body.email;

  grabUserAuth(user, (err, result) => {
    if (err) { res.status(404).send(false); }
    res.status(200).send(result);
  });
};
