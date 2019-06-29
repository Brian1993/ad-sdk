const { adServiceApi } = require('./config')

function loadAd (onAdLoaded, onAdFailed) {
  const isApiExist = !!adApi
  if (!isApiExist)  console.error('AD api does not exist, please notify adminstrator')
  const adURL = `${adServiceApi}/ads`
  const res = fetch(adURL)
    .then(res => res.json())
    .then(json => {
    })
}

module.exports = loadAd
