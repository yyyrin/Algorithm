function solution(arr) {
  const startIdx = arr.indexOf(2);
  
  return startIdx === -1 ? [-1] : arr.slice(startIdx, arr.lastIndexOf(2) + 1);
}
