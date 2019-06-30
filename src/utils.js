function isFunction(functionToCheck) {
  return functionToCheck && typeof(a) === 'function'
}

function toUpper(str) {
  return str 
    ? typeof(str) === 'string' 
      ?  str.trim().toUpperCase()
      : ''
    : ''
}

function generateAdNode (adData) {
  const overlayStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    backgroundColor: 'rgba(0, 0, 0, .35)'
  }
  const overlay = document.createElement('div')

  Object.assign(overlay.style, overlayStyle)

  const adCotentStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    width: '60%',
    height: '40%',
    transform: 'translate(-50%, -50%)'
  }

  const adCotent = document.createElement('div')
  Object.assign(adCotent, adCotentStyle)

  
  // const ad = document.crea





  showAd(overlay)
}

module.exports = {
  _: {
    isFunction,
    toUpper
  },
  generateAdNode
}
