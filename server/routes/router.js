const express = require('express');

const router = express.Router();

const { getUser } = require('./user/getUser.js');

router.route('/')
  .get((req, res) => {
    res.status(200).end();
  });

router.route('/users')
  .get(getUser);
// .post(postUser)
// .put(putUser)
// .delete(deleteUser);
