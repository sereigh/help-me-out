const db = require("../../index");

exports.getHelp = (neededTools, userZip, cb) => {
  db.Tool.find({ tool_name: neededTools })
    .populate({
      path: "tool_owner",
      where: { zip: userZip },
      select: {
        name: 1,
        handy: 1,
        zip: 1,
        photo: 1,
      },
    })
    .sort({ updatedAt: -1 })
    .exec((err, result) => {
      if (err) return cb(err, null);
      return cb(null, result);
    });
};
