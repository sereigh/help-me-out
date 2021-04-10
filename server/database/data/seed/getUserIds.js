// const db = require('../index');

exports.getIds = (model, cb) => {
  model.find({})
    .select({ _id: 1 })
    .exec((err, results) => {
      if (err) cb(err, null);
      return cb(null, results);
    });
};
