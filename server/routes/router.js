const express = require('express');

const router = express.Router();

const { getUser } = require('./user/getUser.js');
const { postUser } = require('./user/postUser.js');
const { putUser } = require('./user/putUser.js');

router.route('/')
  .get((req, res) => {
    res.status(200).end();
  });

router.route('/users/:user_id')
  .get(getUser)
  .post(postUser)
  .put(putUser);

module.exports = router;
