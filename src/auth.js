const { adServiceApi, mode } = require('./config')

module.exports = function authenticateUser (clientId) {
  const authResult = clientId 
    ? authenticate(clientId) 
    : { isSucces: false, errMsg: 'Please provide client ID' }
  return authResult
}

function authenticate (clientId) {
  try {
    console.log('mode:', mode)
    if (mode === 'dev') return { isSucces: true }

    const authResult = sendAuthSevice({ clientId })
  
    return authResult
  } catch (e) {
    
  }
}

async function sendAuthSevice (data) {
  // We don't have a api to authenticate registered user yet, just in case 
  const authURL = `${adServiceApi}/auth`

  const res = await fetch(authURL, {
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
  return res
}