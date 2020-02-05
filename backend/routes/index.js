const express = require('express');
const router = express.Router();
const apps = require('../data/host-app-data');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Apdex list' });
});

module.exports = router;