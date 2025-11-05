/**
 * Assignment by Rakshit - rakshityagi2103@gmail.com
 */
const mergeTimeRanges = (ranges, threshold) => {
  if (!Array.isArray(ranges) || ranges.length === 0) {
    return [];
  }

  const sortedRanges = [...ranges].sort((a, b) => a[0] - b[0]);

  let currentStart = sortedRanges[0][0];
  let currentEnd = sortedRanges[0][1];

  const merged = [];

  for (let i = 1; i < sortedRanges.length; i++) {
    const [nextStart, nextEnd] = sortedRanges[i];
    const gap = nextStart - currentEnd;

    if (gap <= threshold) {
      currentEnd = Math.max(currentEnd, nextEnd);
    } else {
      merged.push([currentStart, currentEnd]);
      currentStart = nextStart;
      currentEnd = nextEnd;
    }
  }

  merged.push([currentStart, currentEnd]);

  return merged;
};

module.exports = {
  mergeTimeRanges
};