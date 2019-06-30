const { adServiceApi, mode } = require('./config')

module.exports = function authenticateUser (clientId) {
  const authResult = clientId 
    ? authenticate(clientId) 
    : { isSucces: false, errMsg: 'Please provide client ID' }
  return authResult
}

function authenticate (clientId) {
  if (mode === 'dev') return { isSucces: true }
  let authResult

  sendAuthSevice({ clientId })
  .then(result => authResult = { ...result })
  .catch(e => authResult = { isSucces: false, errMsg: e.message })
  return authResult
}

function sendAuthSevice (data) {
  // We don't have a api to authenticate registered user yet, just in case 
  const authURL = `${adServiceApi}/auth`

  return fetch(authURL, {
    method: 'POST',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
    },
    redirect: 'follow',
    body: data
  })
  .then(res => res.json())
  .catch(e => {
    return e
  })
}