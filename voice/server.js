const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(express.static('node_modules/nexmo-client/dist'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


/* STEP 1

Nexmo will make a request to your answer_url when an inbound call is received.

You need to create a webhook server that is capable of receiving this request 
and returning an NCCO containing an action (https://developer.nexmo.com/voice/voice-api/ncco-reference)
that will forward the call to the PSTN phone number.

NOTE: Please check the Answer Webhook body, you will have to extract the PSTN Number to connect to.

*/


/* STEP 2

Implement VAPI Event Webhook & RTC Event Webhook. Log the request body using console.log and return 200 OK
Make sure to configure webhooks in your dashboard.

Doc: https://developer.nexmo.com/voice/voice-api/webhook-reference#event-webhook

*/

/* STEP 3

Implement a logic to allow calls only to allowed numbers (for example, only to your personal number).
If the number is in the allowed numbers, the call is forwarded to it.
Otherwise, implement a TTS action with an alert to the user (for example: Sorry, that number is not permitted).


Doc: https://developer.nexmo.com/voice/voice-api/ncco-reference

*/


// STEP 1 - VAPI ANSWER WEBHOOK
// Type the code below this point please

app.get('/webhooks/answer', (req, res) => {
	console.log("Answer:");
	console.log(req.query);
	var destNumber = null; // How do you get the number from req.query? 
	const ncco = []
	res.json(ncco);
});

// STEP 1 - VAPI EVENT WEBHOOK - INIT
// Type the code below this point please



// STEP 1 - RTC EVENT WEBHOOK - INIT
// Type the code below this point please




app.get('/', function (req, res) {
	res.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(port, () => console.log(`Server listening on port ${port}!`));