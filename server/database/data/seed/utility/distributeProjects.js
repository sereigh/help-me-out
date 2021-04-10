const { addProjectRef } = require('../../../queries/middleware/addProjectRef');

exports.distributeProjects = (user, project) => addProjectRef(user, project);
