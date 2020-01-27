// replace this values with the one generated in your TokBox Account
const apiKey = 'API_KEY';
const appServerUrl = 'http://localhost:3000/tkbx';

let sessionId;
let token;

// 1. Create session
createSession();

// Handling all of our errors here by alerting them
function handleError(error) {
  if (error) {
    alert(error.message);
  }
}

// 1.1 After create session, call getToken(sessionId)
function createSession() {}

// 2. After getToken, call initializeSession() and continue according to the tutorial
function getToken(sessionId) {}

// 3. Complete according to the tutorial
function initializeSession() {}
