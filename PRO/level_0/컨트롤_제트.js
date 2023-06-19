function solution(s) {
  let arr = s.split(" ");
  return arr.reduce((acc, cur, idx, arr) => {
    return isNaN(Number(cur)) ? acc - arr[idx - 1] : acc + Number(cur);
  }, 0);
}
