// 효율성이 간당간당하게 통과한 코드 //
function solution(s) {
  let queue = []; // queue 생성

  s.split("").map((e) => {
    // ")"인 경우에 queue에 "("가 있다면 "(" 없애기
    if (e === ")" && queue.lastIndexOf("(") > -1) {
      queue.splice(queue.lastIndexOf("("), 1);
    } else {
      queue.push(e); // 위의 경우에 해당되지 않으면 queue에 push하기
    }
  });

  // 괄호가 올바르게 짝지어 있다면 queue의 길이는 0
  return queue.length === 0 ? true : false;
}


// 다른 사람의 풀이 //
function solution(s) {
  let cum = 0;
  for (let paren of s) {
    // "("인 경우 cum에 +1, ")"인 경우 cum에 -1
    cum += paren === "(" ? 1 : -1;
    // ")"의 개수가 "("보다 많은 경우 false
    if (cum < 0) {
      return false;
    }
  }
  // "("와 ")"의 개수가 같은 경우 true return, 아니라면 false return
  return cum === 0 ? true : false;
}
