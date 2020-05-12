## Video certification

1. Clone the repository
2. Add your API KEY & SECRET to `video/application_server/routes/tkbx.js` and `video/web_client/js/app.js`.
3. `cd` into `video/application_server/` and run `npm install && npm start`
4. On a separate terminal, install `http-server` and serve the client files like this:

```
npm install -g http-server
cd route/to/project/video/web_client
http-server .
```

5. Open a browser and go to localhost:8080

# CST Training EMEA

Training session February 2020

### Prerequisites

#### Nexmo CLI

Open your terminal and type `npm install nexmo-cli@beta -g`

Set up the Nexmo CLI to use your Nexmo API Key and API Secret. You can get these from the settings page in the Nexmo Dashboard.

Run the following command in a terminal, while replacing `api_key` and `api_secret` with your own:

`nexmo setup api_key api_secret`

#### Ngrok

Ngrok is a service that will expose your server to the outside world-

Install ngrok https://ngrok.com/ and run an http tunnel using the following command:

```
./ngrok http PORT_NUMBER
```

#### IDE

You can use your favorite IDE. We recommend: https://code.visualstudio.com/

## Voice

Voice hands-on: [go!](./voice/README.md)

## Video

Video hands-on: [go!](./video/README.md)
