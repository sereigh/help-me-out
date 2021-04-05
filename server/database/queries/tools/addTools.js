const db = require('../../index.js');

exports.addTools = (tool, cb) => {
  db.Tool(tool).save((err, result) => {
    if (err) { cb(err, null); } else { cb(null, result); }
  });
};
