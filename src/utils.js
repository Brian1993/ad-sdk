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



module.exports = {
  isFunction,
  toUpper
}
