var express = require('express');
var router = express.Router();

const apiKey = 'YOUR API HERE';
const apiSecret = 'YOUR SECRET HERE';

var sessionId;


/* STEP 1

Require TB client and initalize it

*/
var OpenTok = require('opentok'),
    opentok = new OpenTok(apiKey, apiSecret);

const createSession = onSessionCreated => {
  /* STEP 2

  Generate session and update the property sessionId. Then call 'onSessionCreated()' method.
        "...sessionId = 123453;"
        "...onSessionCreated();"

  */

 opentok.createSession(function(err, session) {
  if (err) return console.log(err);

  // save the sessionId
  sessionId = session.sessionId;
  onSessionCreated();
});
};

router.post('/session/', function(req, res, next) {
  var onSessionCreated = () => {
    res.json({ sessionId: sessionId });
  };

  if (!sessionId) {
    createSession(onSessionCreated);
  } else {
    onSessionCreated();
  }
});

router.post('/user/', function(req, res, next) {
  /* STEP 3

  Create oken and return to client
        
  */
  const token = opentok.generateToken(sessionId);
  res.json({ token });
});

module.exports = router;
