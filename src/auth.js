const { adServiceApi, mode, ERROR_CODE } = require('./config')

/**
 * call auth serice to authenticate user is valid
 * @param {string} clientd clientId provided by user
 */
module.exports = function authenticateUser (clientId) {
  const authResult = clientId 
    ? authenticate(clientId) 
    : { isSucces: false, errMsg: ERROR_CODE['004'] }
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