const db = require("../../index");

exports.addTools = (tool, cb) => {
  db.Tool(tool).save((err, result) => {
    if (err) return cb(err, null);
    return cb(null, result);
  });
};
