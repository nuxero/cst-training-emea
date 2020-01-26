var express = require('express');
var router = express.Router();

//1. Require TB client and initalize it

const createSession = callback => {
  //2. Generate session and call 'callback' method
};

router.post('/session/', function(req, res, next) {
  var sessionCallback = session => {
    res.json({ sessionId: session.sessionId });
  };

  createSession(sessionCallback);
});

router.post('/user/', function(req, res, next) {
  //3. Create oken
  const token = 'COMPLETE TOKEN GENERATION';
  res.json({ token });
});

module.exports = router;
