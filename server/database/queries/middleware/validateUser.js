const { addUser } = require("../users/addUser");
const { grabUser } = require("../users/grabUser");
const { validateEmail } = require("./validateEmail");

exports.validateUser = (user, email, cb) => {
  validateEmail(email, (err, result) => {
    if (err) {
      addUser(user, (error, results) => {
        if (error) return cb(error, null);
        return cb(null, [false, results]);
      });
    } else {
      grabUser(result, (er, resul) => {
        if (er) return cb(er, null);
        return cb(null, [true, resul]);
      });
    }
  });
};
