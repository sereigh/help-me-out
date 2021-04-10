/* eslint-disable consistent-return */
/* eslint-disable no-underscore-dangle */
const db = require('../../index');
const { getIds } = require('./getUserIds');

const filterIds = (docs) => docs.map((doc) => doc._id);

const getAllIds = (cb) => {
  const allIds = {};

  getIds(db.User, (error, result) => {
    if (error) return cb(error, null);
    allIds.users = filterIds(result);
    getIds(db.Project, (err, res) => {
      if (error) return cb(error, null);
      allIds.projects = filterIds(res);
      getIds(db.Tool, (e, r) => {
        if (e) return cb(e, null);
        allIds.tools = filterIds(r);
        return cb(null, allIds);
      });
    });
  });
};

getAllIds((err, result) => {
  if (err) return console.error(err);
  return console.log(result);
});
