const { addUser } = require('../users/addUser.js');
const { grabUser } = require('../users/grabUser.js');
const { validateEmail } = require('./validateEmail.js');

exports.validateUser = (user, email, cb) => {
  validateEmail(email, (err, result) => {
    console.log(err === true)
    if (err) {
      addUser(user, (error, results) => {
        if (error) { return cb(error, null); }
        return cb(null, [false, results]);
      });
    } else {
      grabUser(result, (er, resul) => {
        if (er) { return cb(er, null); }
        return cb(null, [true, resul]);
      });
    }
  });
};
