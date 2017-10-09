# Parse IEC binary

Utility to parse a string bytes (ex: 1TB) to bytes (1099511627776).
NOTE: operates only on *ints*

## Usage

```js
const parseIec = require('parse-iec')
parseIec.parse('2gi')
// output: 2048

parseIec.parse('512mi')
// output: 512
```
