var tapLog = function (prefix) {
  return function (object) {
    console.log(prefix ? prefix + ': ' + object : object)
    return object
  }
}

module.exports = tapLog
