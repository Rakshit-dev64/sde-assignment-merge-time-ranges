# Merge Time Ranges (SDE Assignment)

This small module merges time ranges where the system was active.  
Sometimes two ranges may be very close or even slightly overlapping — and in that case, we want to treat them as one continuous active period. That’s exactly what this function does.

You provide:
- A list of `[start, end)` timestamps (in milliseconds)
- A `threshold` which tells how close two ranges can be to still be considered connected

It returns:
- A clean list of merged and sorted time periods

---

## How it Works (in simple words)

1. The ranges are sorted by their start time.
2. We go through them one-by-one.
3. If two ranges overlap **or** the gap between them is **less than or equal to the threshold**, we join them together.
4. Otherwise, we keep them separate.

The result is a set of non-overlapping, nicely merged time intervals.

---

## Example

```js
const { mergeTimeRanges } = require('./my-module.js');

const ranges = [
  [1000, 2000],
  [2500, 4000],
  [3900, 4100],
  [8000, 9000],
  [9050, 9500]
];

const threshold = 200;

console.log(mergeTimeRanges(ranges, threshold));
```

### Output
```js
[
  [1000, 2000],
  [2500, 4100],
  [8000, 9500]
]
```

## Running the Code
You can directly require the module in any Node.js script:
```js
const { mergeTimeRanges } = require('./my-module.js');
```
