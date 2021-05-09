const db = require("../../index");

exports.addToolRef = (user, tool) => {
  db.User.findByIdAndUpdate(
    { _id: user },
    { $push: { tools: tool } },
    { upsert: true }
  ).exec();
};
