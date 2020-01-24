## Voice Tutorial


---> Introduction: https://developer.nexmo.com/client-sdk/tutorials/app-to-phone/introduction


### Prerequisites

#### Nexmo CLI Beta

 Open terminal and type `npm install nexmo-cli@beta -g`

Set up the Nexmo CLI to use your Nexmo API Key and API Secret. You can get these from the settings page in the Nexmo Dashboard.

Run the following command in a terminal, while replacing `api_key` and `api_secret` with your own:

`nexmo setup api_key api_secret`

#### Ngrok



=======

Create App using CLI
Create User

Once I have the user, create JWT

nexmo jwt:generate ./private.key sub=MY_USER_NAME exp=$(($(date +%s)+21600)) acl='{"paths":{"/*/users/**":{},"/*/conversations/**":{},"/*/sessions/**":{},"/*/devices/**":{},"/*/image/**":{},"/*/media/**":{},"/*/applications/**":{},"/*/push/**":{},"/*/knocking/**":{}}}' application_id=MY_APP_ID

Remmeber to replace appId, private Key and USER NAME