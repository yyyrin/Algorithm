// 내 풀이
function solution(arr) {
  let answer = [];
  arr.forEach((e) => {
    !answer.length || answer[answer.length - 1] !== e ? answer.push(e) : null;
  });
  return answer;
}

// 다른 풀이
function solution(arr) {
  return arr.filter((e, i) => e !== arr[i + 1]);
}
