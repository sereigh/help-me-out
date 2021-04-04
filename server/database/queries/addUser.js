const db = require('../index.js');
const User = require('../schemas/users.js');

const addUser = (user, cb) => {
  db.User(user).save((err, result) => {
    if (err) { cb(err, null); } else { cb(null, result); }
  });
};

addUser({
  name: 'John Smith',
  zip: '37013',
  password: 'har7ytu',

}, (err, result) => {
  if (err) { return console.error(err); } return console.log(result);
});
