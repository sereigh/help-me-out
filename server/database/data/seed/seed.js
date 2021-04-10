/* eslint-disable max-len */
const { getAllIds } = require('./getAllIds');
const { addRefs } = require('./addRefs');
/*
1) start mongod
2) open terminal
3) enter import commands via command line one at a time

  mongoimport --db=help-me-out --headerline --type=csv --ignoreBlanks --file ./server/database/data/mockups/mocks/users.csv

  mongoimport --db=help-me-out --headerline --type=csv --ignoreBlanks --file=./server/database/data/mockups/mocks/projects.csv

  mongoimport --db=help-me-out --headerline --type=csv --ignoreBlanks --file=./server/database/data/mockups/mocks/tools.csv
*/

// import all

// get all _ids
getAllIds((e, r) => {
  if (e) return console.error(e);
  // assign refs
  addRefs(r.users, r.projects, r.tools, (err, res) => {
    if (err) return console.error(err);
    return console.log(res);
  });
  return console.log('done');
});
