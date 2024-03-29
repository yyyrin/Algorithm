// 내 풀이
function solution(arr) {
  let ans = [arr[0]];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i - 1] != arr[i]) {
      ans.push(arr[i]);
    }
  }
  return ans;
}

// 다른 풀이
// function solution(arr) {
//   return arr.filter((val, index) => val != arr[index + 1]);
// }
