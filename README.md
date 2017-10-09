# Parse IEC binary

Utility to parse a bytes (ex: 1Gi) to a number megabytes 1024).
NOTE: operates only on *ints*

## Usage

```js
const parseIec = require('parse-iec')
parseIec.parse('2gi')
// output: 2048

parseIec.parse('512mi')
// output: 512

parseIec.parse('2ti')
// output: 2097152
```
