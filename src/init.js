const loadAd = requir('./loadAd.js')

module.exports = function init (userConfig) {
  const { 
    clientId,
    onAdLoaded,
    onAdFailed,
    onAdImpression
   } = userConfig

  const authResult = authenticateUser(clientId)
  if (!authResult.isSucces) return console.log(`AD SDK error occured: ${authResult.errMsg}`)

  loadAd(onAdLoaded, onAdFailed)
}
