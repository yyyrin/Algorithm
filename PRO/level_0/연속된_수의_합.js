function solution(num, total) {
  let ans = [];
  // result의 중간값 = total/num
  let x = parseInt(total / num) - parseInt(num / 2);
  if (num % 2 === 0) {
    // 짝수인 경우
    for (let i = x + 1; i < x + 1 + num; i++) ans.push(i);
  } else {
    // 홀수인 경우
    for (let i = x; i < x + num; i++) ans.push(i);
  }
  return ans;
}
