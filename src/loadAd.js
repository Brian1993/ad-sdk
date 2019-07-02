const { adServiceApi } = require('./config')
const _ = require('./utils')
const generateAdNode = require('./ad')

module.exports = function loadAd (onAdLoaded, onAdFailed, adType, isAutoloaded) {
  const isApiExist = !!adServiceApi
  if (!isApiExist)  console.error('AD api does not exist, please notify adminstrator')

  const adURL = `${adServiceApi}/ads`

  fetch(adURL)
  .then(res => res.json())
  .then(data => {
    const isRenderAd = checkIfRenderAd(data, adType)
    if (!isRenderAd) {
      return _.isFunction(onAdFailed)
        ? onAdFailed({ errMsg: 'No add has been loaded or ad type is other' })
        : console.error('No add has been loaded or ad type is other')
    }
    showAd(generateAdNode(data))
    // TODO: create a function => showAd, let user can simplely use the method to show AD
 
  
  })
  .catch(e => {
    console.error('error occured at loading ad:', e)
    if (_.isFunction(onAdFailed)) onAdFailed({ errMsg: e.message })
  })
}

function checkIfRenderAd (data, adType) {
  const { success, type } = data
  if (!success) return false
  if (adType && (type !== _.toUpper(adType))) return false
  return true
}

function showAd (ad) {
  document.body.innerHTML = ad;
}