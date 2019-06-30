const { adServiceApi } = require('./config')
const { _ } = require('./utils')

module.exports = function loadAd (onAdLoaded, onAdFailed, adType, isAutoloaded) {
  const isApiExist = !!adServiceApi
  if (!isApiExist)  console.error('AD api does not exist, please notify adminstrator')

  const adURL = `${adServiceApi}/ads`

  fetch(adURL)
  .then(res => res.json())
  .then(data => {
    const isRenderAd = checkIfRenderAd(data, adType)
    if (!isRenderAd && _.isFunction(onAdFailed)) 
      return onAdFailed({ errMsg: 'No add has been loaded or ad type is other' })
    // TODO: create a function => showAd, let user can simplely use the method to show AD 
    if (!isAutoloaded && _.isFunction(onAdLoaded)) return onAdLoaded()
  
  })
  .catch(e => {
    console.error('error occured at loading ad:', e)
    if (_.isFunction(onAdFailed)) onAdFailed({ errMsg: e.message})
  })
}

function checkIfRenderAd (data, adType) {
  const { success, type } = data
  if (!success) return false
  if (type !== _.toUpper(adType)) return false
  return true
}


function renderAd () {

}

function showAd (overlay) {
  document.body.insertBefore(overlay, document.body.firstChild);
}