const express = require('express');
const router = express.Router();
const apps = require('../data/host-app-data');

/* GET API data json file */
router.get('/apps', function(req, res, next) {
  res.send(apps);
});

module.exports = router;