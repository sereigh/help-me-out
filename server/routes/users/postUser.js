const { validateUser } = require('../../database/querires/middleware/validateUser.js');

exports.postUser = (req, res) => {
  validateUser(req.body, req.body.email, (err, result) => {
    if (err) { res.status(404).send(err); } else { res.status(200).send(result); }
  });
};
