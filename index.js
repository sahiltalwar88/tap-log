module.exports = function (prefix) {
  return function (object) {
    console.log(prefix + ': ' + object)
    return object
  }
}
