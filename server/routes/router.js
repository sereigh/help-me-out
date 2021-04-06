const express = require('express');

const router = express.Router();

const { getAllUsers } = require('./users/getAllUsers.js');

const { postReport } = require('./users/postReport.js');

const { getUser } = require('./users/getUser.js');
const { postUser } = require('./users/postUser.js');
const { putUser } = require('./users/putUser.js');

const { handyDown } = require('./handy/handyDown.js');
const { handyUp } = require('./handy/handyUp.js');

const { postTools } = require('./tools/postTools.js');
const { putTools } = require('./tools/putTools.js');
const { deleteTools } = require('./tools/deleteTools.js');

const { postProjects } = require('./projects/postProjects.js');
const { putProjects } = require('./projects/putProjects.js');
const { deleteProjects } = require('./projects/deleteProjects.js');
const { putNeeds } = require('./projects/putNeeds.js');

const { putUserPhotos } = require('./photos/putUserPhotos.js');
const { putToolPhotos } = require('./photos/putToolPhotos.js');
const { putProjectPhotos } = require('./photos/putProjectPhotos.js');

router.route('/')
  .get((req, res) => {
    res.status(200).end();
  });

router.route('/users')
  .get(getAllUsers);

router.route('/users/:user_id')
  .get(getUser)
  .post(postUser)
  .put(putUser);

router.route('/users/:user_id/photos')
  .put(putUserPhotos);

router.route('/users/:user_id/report')
  .put(postReport);

router.route('/users/:user_id/handy/down')
  .put(handyDown);

router.route('/users/:user_id/handy/up')
  .put(handyUp);

router.route('/users/:user_id/tools')
  .post(postTools);

router.route('/users/:user_id/tools/:tool_id')
  .put(putTools)
  .delete(deleteTools);

router.route('/users/:user_id/tools/:tool_id/photos')
  .put(putToolPhotos);

router.route('/users/:user_id/projects')
  .post(postProjects);

router.route('/users/:user_id/projects/:project_id')
  .put(putProjects)
  .delete(deleteProjects);

router.route('/users/:user_id/projects/:project_id/photos')
  .put(putProjectPhotos);

router.route('/users/:user_id/projects/:project_id/needs')
  .put(putNeeds);

module.exports = router;
