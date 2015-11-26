# tap-log
Log the given prefix and value, then return value. Useful for debugging functional pipelines.

#Example Usage:
```javascript
const tapLog = require('tap-log')
const R = require('ramda')

R.pipe(
    R.add(2),
    tapLog(),
    R.multiply(3),
    tapLog('final answer')
)(3)
// -> outputs '5' and 'final answer: 15' to console & evaluates to 15
```
