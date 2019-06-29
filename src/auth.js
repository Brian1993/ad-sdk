const { adServiceApi, mode } = require('./config')

module.exports = function authenticateUser (clientId) {
  const authResult = clientId ? authenticate(clientId) : { isSucces: false, errMsg: 'Please provide client ID' }
  return authResult
}

function authenticate (clientId) {
  if (mode === 'dev') return { isSucces: true }

  const authResult = sendAuthSevice({ clientId })
    .catch(e => e)

  return authResult
}

function sendAuthSevice (data) {
  // We don't have a api to authenticate registered user yet, just in case 
  const authURL = `${adServiceApi}/auth`

  return fetch(authURL, {
    method: 'POST',
    mode: 'cors',
    credentials: 'same-origin',
    headers: {
        'Content-Type': 'application/json',
    },
    redirect: 'follow',
    referrer: 'no-referrer',
    body: data
  })
  .then(response => response.json())
}