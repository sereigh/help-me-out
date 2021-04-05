const express = require('express');

const router = express.Router();

const { getUser } = require('./users/getUser.js');
const { postUser } = require('./users/postUser.js');
const { putUser } = require('./users/putUser.js');

const { postTools } = require('./tools/postTools.js');
const { putTools } = require('./tools/putTools.js');
const { deleteTools } = require('./tools/deleteTools.js');

const { postProjects } = require('./projects/postProjects.js');
const { putProjects } = require('./projects/putProjects.js');
const { deleteProjects } = require('./projects/deleteProjects.js');

router.route('/')
  .get((req, res) => {
    res.status(200).end();
  });

router.route('/users/:user_id')
  .get(getUser)
  .post(postUser)
  .put(putUser);

router.route('./users/:user_id/vote/down')
  .put(downvote)

router.route('./users/:user_id/vote/up')
  .put(upvote)

router.route('/users/:user_id/tools')
  .post(postTools);

router.route('/users/:user_id/tools/:tool_id')
  .put(putTools)
  .delete(deleteTools);

router.route('/users/:user_id/projects')
  .post(postProjects);

router.route('/users/:user_id/projects/:project_id')
  .put(putProjects)
  .delete(deleteProjects);

module.exports = router;
