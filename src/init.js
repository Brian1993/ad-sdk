const loadAd = require('./loadAd.js')
const authenticateUser = require('./auth')

module.exports = function init (userConfig) {
  const { 
    clientId,
    onAdLoaded,
    onAdFailed,
    onAdImpression,
    isAutoloaded = true,
    adType
   } = userConfig

  const authResult = authenticateUser(clientId)
  if (!authResult.isSucces) return console.error(`AD SDK error occured: ${authResult.errMsg}`) 
  loadAd(onAdLoaded, onAdFailed, adType, isAutoloaded)
}