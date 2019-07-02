function isFunction(functionToCheck) {
  return functionToCheck && typeof(functionToCheck) === 'function'
}

function toUpper(str) {
  return str 
    ? typeof(str) === 'string' 
      ?  str.trim().toUpperCase()
      : ''
    : ''
}


module.exports = {
  isFunction,
  toUpper,
}
