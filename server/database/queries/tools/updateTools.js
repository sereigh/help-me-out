const db = require("../../index");

exports.updateTools = (tool, user, update, cb) => {
  db.Tool.findByIdAndUpdate(
    { _id: tool, where: { $ref: user } },
    update,
    { new: true },
    (err, result) => {
      if (err) return cb(err, null);
      return cb(null, result);
    }
  );
};
