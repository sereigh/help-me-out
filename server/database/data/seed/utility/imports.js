exports.importUsers =
  "mongoimport --db=help-me-out --headerline --type=csv --ignoreBlanks --file ./server/database/data/mockups/mocks/users.csv";

exports.importProjects =
  "mongoimport --db=help-me-out --headerline --type=csv --ignoreBlanks --file=./server/database/data/mockups/mocks/projects.csv";

exports.importTools =
  "mongoimport --db=help-me-out --headerline --type=csv --ignoreBlanks --file=./server/database/data/mockups/mocks/tools.csv";
