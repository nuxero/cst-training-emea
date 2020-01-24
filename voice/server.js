const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;


// Make sure phone number is allowed to be called
const allowedNumbers = ['447749725766'];

app.use(express.static('node_modules/nexmo-client/dist'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/webhooks/answer', (req, res) => {
	console.log("Answer:");
	console.log(req.query);
	var dest_number = req.query.to;

	var allowed_numbers = allowedNumbers;

	if (allowed_numbers.indexOf(dest_number) === -1) {
		return res.json([{
			"action": "talk",
			"text": "Sorry, that number is not permitted"
		}]);
	}

	// todo add something to tweak

	const ncco = [{
		"action": "connect",
		"endpoint": [{
			"type": "phone",
			"number": dest_number
		}]
	}]
	res.json(ncco);
});

app.post('/webhooks/event', (req, res) => {
	/* console.log("EVENT:");
	console.log(req.body); */
	res.status(200).end();
});
app.post('/webhooks/rtc', (req, res) => {
	/* 	console.log("RTC:");
		console.log(req.body); */
	res.status(200).end();
});

app.get('/', function (req, res) {
	res.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(port, () => console.log(`Server listening on port ${port}!`));