var tapLog = function (prefix) {
  return function (object) {
    console.log(prefix + ': ' + object)
    return object
  }
}

module.exports = tapLog
