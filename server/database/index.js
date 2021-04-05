const mongoose = require('mongoose');

const { usersSchema } = require('./schemas/users.js');
const { toolsSchema } = require('./schemas/tools.js');
const { projectsSchema } = require('./schemas/projects.js');

mongoose.connect('mongodb://localhost:27017/help-me-out', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
})
  .catch((err) => new Error('Error connecting w/ Mongoose: ', err));

exports.User = mongoose.model('User', usersSchema);
exports.Tool = mongoose.model('Tool', toolsSchema);
exports.Project = mongoose.model('Project', projectsSchema);
