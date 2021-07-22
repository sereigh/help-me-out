const db = require("../../index");

exports.removeTools = (tool, user, cb) => {
  db.Tool.findByIdAndDelete(
    { _id: tool, where: { $ref: user } },
    (err, result) => {
      if (err) return cb(err, null);
      return cb(null, result);
    }
  );
};
