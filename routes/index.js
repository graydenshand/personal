var express = require('express');
var router = express.Router();
path = require("path");

/* GET catch all */
router.get('/*', function(req, res, next) {
  // Forward all requests to react app
  res.sendFile(path.join(__dirname.replace("routes", ""), "client", "build", "index.html"))
});

module.exports = router;
