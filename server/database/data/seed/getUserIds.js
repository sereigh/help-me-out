exports.getIds = (model, cb) => {
  model
    .find({})
    .select({ _id: 1 })
    .sort({ zip: -1 })
    .exec((err, results) => {
      if (err) cb(err, null);
      return cb(null, results);
    });
};
