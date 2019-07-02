const { adServiceApi, ERROR_CODE } = require('./config')
const _ = require('./utils')
const generateAdNode = require('./ad')

/**
 * Loding AD to user's interface
 * @param {func} onAdLoaded        onAdLoaded Listener passed by user
 * @param {func} onAdFailed        onAdFailed Listener passed by user
 * @param {string} adType          AD type speicfy by user
 * @param {boolean} isAutoloaded   is auto load AD speicfy by user
 */
module.exports = function loadAd (onAdLoaded, onAdFailed, onAdImpression, adType, isAutoloaded) {
  const isApiExist = !!adServiceApi
  if (!isApiExist)  console.error(ERROR_CODE['001'])
  const adURL = `${adServiceApi}/ads`

  fetch(adURL)
  .then(res => res.json())
  .then(data => {
    const isRenderAd = checkIfRenderAd(data, adType)
    if (!isRenderAd) {
      return _.isFunction(onAdFailed)
        ? onAdFailed({ errMsg: ERROR_CODE['002'] })
        : console.error(ERROR_CODE['002'])
    }
    
    if (!isAutoloaded) {
      return _.isFunction(onAdLoaded)
        ? onAdLoaded(() => renderAd(generateAdNode(data)))
        : console.error(ERROR_CODE['003'])
    }

    renderAd(generateAdNode(data), onAdImpression, data)
    if (_.isFunction(onAdLoaded)) onAdLoaded()
  })
  .catch(e => {
    console.error('error occured at loading ad:', e)
    if (_.isFunction(onAdFailed)) onAdFailed({ errMsg: e.message })
  })
}

/**
 * Check if Advertisment data is valid and ad type is what user specified
 * @param {object} data   Advertisment data
 * @param {string} adType ad type speicfy by user
 */
function checkIfRenderAd (data, adType) {
  const { success, type } = data
  if (!success) return false
  if (adType && (type !== _.toUpper(adType))) return false
  return true
}

/**
 * Render AD
 * @param {object} adNode html dom node of ad
 */
function renderAd (adNode, onAdImpression, adData) {
  const adContainer = document.createElement('div')
  adContainer.innerHTML = adNode
  const body = document.getElementsByTagName('body')[0]
  body.appendChild(adContainer)
  window.closeAd = () => closeAd(onAdImpression, adData)

  setOnAdImpressionBeginTime()
}

/**
 * Close AD and check is onAdImpression
 * @param {func}    onAdImpression  onAdFailed Listener passed by user
 * @param {object}  adData          Ad data
 */
function closeAd (onAdImpression, adData) {
  const ad = document.getElementById('ad-overlay')
  ad.remove()
  
  const { impression_url } = adData
  const isOnAdImpression = checkIfOnAdImpression()
  if (isOnAdImpression) {
    const hsaOnAdImpression = _.isFunction(onAdImpression)
    fetch(impression_url, {
      method: 'POST'
    })
    .then(res => {
      if (hsaOnAdImpression) onAdImpression(res)
    })
    .catch(e => {
      if (hsaOnAdImpression) onAdImpression(e)
    })
  }
}

/**
 * record ad loaded time at sessionStorage
 */
function setOnAdImpressionBeginTime () {
  window.sessionStorage.setItem('onAdImpressionBeginTime', new Date().getTime())
}

/**
 * check if OnAdImpression event is 
 */
function checkIfOnAdImpression () {
  const beginTime = window.sessionStorage.getItem('onAdImpressionBeginTime')
  const endTime = new Date().getTime()
  return (endTime - beginTime) / 1000 > 1
}
