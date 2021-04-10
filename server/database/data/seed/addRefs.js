/* eslint-disable no-unused-vars */
/* eslint-disable no-shadow */
/* eslint-disable no-plusplus */
/* eslint-disable no-param-reassign */
const { addToolRef } = require('../../queries/middleware/addToolRef');
const { addProjectRef } = require('../../queries/middleware/addProjectRef');
// const { distributeTools } = require('./utility/distributeTools');
const { indexOf } = require('./utility/indexOf');

exports.addRefs = (users, projects, tools, cb) => {
  let max = users.length * 2;

  (function exec(max) {
    addProjectRef(users[indexOf(users)], projects[indexOf(projects)]);
    if (!max) return;
    exec(--max);
  }());

  max = users.length * 3;

  (function exec(max) {
    addToolRef(users[indexOf(users)], tools[indexOf(tools)]);
    if (!max) return;
    exec(--max);
  }());

  return cb(null, 'fin');
  // exec(addProjectRef(user, project), 300);
};
