var tapLog = function (prefix) {
  return function (object) {
    if (prefix) {
      console.log(prefix + ': ', object)
    } else {
      console.log(object)
    }
    return object
  }
}

module.exports = tapLog
