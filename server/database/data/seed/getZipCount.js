// const db = require('../../index');

// exports.getZipCount = (cb) => {
//   const allZips = {};

//   db.User.distinct('zip')
//     .exec((err, results) => {
//       if (err) cb(err, null);
//       allZips.[results] =
//       return cb(null, results);
//     });

// db.User.find({})
//   .select({ _id: 0, zip: 1 })
//   .exec((err, results) => {
//     if (err) cb(err, null);
//     return cb(null, results);
//   });
// };
// get zip count
// getZipCount((err, res) => {
//   if (err) return console.error(err);
//   return console.log(res);
// });
