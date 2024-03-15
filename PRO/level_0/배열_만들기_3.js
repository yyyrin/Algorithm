function solution(arr, intervals) {
  return intervals.reduce((acc, cur) => {
    acc.push(...arr.slice(cur[0], cur[1] + 1));
    return acc;
  }, []);
}
