function solution(arr) {
  let maxLength = 1;
  if (arr.length === maxLength) return arr;

  while (arr.length > maxLength) maxLength *= 2;

  return [...arr, ...new Array(maxLength - arr.length).fill(0)];
}
