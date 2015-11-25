# tap-log
Log the given prefix and value, then return value. Useful for debugging functional pipelines.

#Example Usage:
```javascript
const tapLog = require("tap-log")
const R = require("ramda")

R.pipe(
    R.add(2),
    tapLog('test'),
    R.multiply(3)
)(3)
// -> outputs "test: 5" to console & evaluates to 15
```
