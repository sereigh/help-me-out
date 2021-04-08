const express = require('express');

const router = express.Router();

const { getRelevantInfo } = require('./relevant/getRelevantInfo');

const { postReport } = require('./users/postReport');

const { putFavorites } = require('./users/putFavorites');
const { deleteFavorites } = require('./users/deleteFavorites');

const { getUser } = require('./users/getUser');
const { postUser } = require('./users/postUser');
const { putUser } = require('./users/putUser');
const { getTopExperts } = require('./users/getTopExperts');

const { handyDown } = require('./handy/handyDown');
const { handyUp } = require('./handy/handyUp');

const { postTools } = require('./tools/postTools');
const { putTools } = require('./tools/putTools');
const { deleteTools } = require('./tools/deleteTools');

const { postProjects } = require('./projects/postProjects');
const { putProjects } = require('./projects/putProjects');
const { deleteProjects } = require('./projects/deleteProjects');
const { putNeeds } = require('./projects/putNeeds');
const { getRecentProjects } = require('./projects/getRecentProjects');

const { putUserPhotos } = require('./photos/putUserPhotos');
const { putToolPhotos } = require('./photos/putToolPhotos');
const { putProjectPhotos } = require('./photos/putProjectPhotos');

const { getGoogleMapsAPI } = require('./api/google/maps');

router.route('/')
  .get((req, res) => {
    res.status(200).end();
  });

router.route('/users')
  .post(postUser);

router.route('/experts')
  .get(getTopExperts);

router.route('/users/:user_id')
  .get(getUser)
  .put(putUser);

router.route('/users/:user_id/relevant')
  .get(getRelevantInfo);

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

router.route('/projects')
  .get(getRecentProjects);

router.route('/users/:user_id/projects')
  .post(postProjects);

router.route('/users/:user_id/projects/:project_id')
  .put(putProjects)
  .delete(deleteProjects);

router.route('/users/:user_id/projects/:project_id/photos')
  .put(putProjectPhotos);

router.route('/users/:user_id/projects/:project_id/needs')
  .put(putNeeds);

router.route('/users/:user_id/favorites')
  .put(putFavorites)
  .delete(deleteFavorites);

router.route('/api/google/maps')
  .get(getGoogleMapsAPI);

module.exports = router;
