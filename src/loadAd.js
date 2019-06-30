const { adServiceApi } = require('./config')

module.exports = function loadAd (onAdLoaded, onAdFailed, isAutoloaded) {
  try {
    const isApiExist = !!adServiceApi
    if (!isApiExist)  console.error('AD api does not exist, please notify adminstrator')
  
    const adURL = `${adServiceApi}/ads`
    const res = load(adURL)

    // checkRespone(res)
    // if (isAutoloaded) 
    if (onAdLoaded) onAdLoaded()

    

  } catch (e) {
    if (onAdFailed) onAdFailed(e)
    console.error('error occured at loading ads:', e)
  }
}


function load (adURL) {
  try {
    const res = fetch(adURL).then(res => res.json())
    return res
  } catch (e) {
    throw e
  }
}

// function checkRespone (res) {
//   if()
// }