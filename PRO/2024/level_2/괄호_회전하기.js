function solution(s) {
  let result = 0;
  // 문자열의 길이가 홀수인 경우, 올바른 괄호 문자열 될 수 X
  if (s.length % 2) return 0;

  // i는 시작 index
  for (let i = 0; i < s.length; i++) {
    // i를 기준으로 문자열 회전시켜 새로운 문자열 생성
    let arr = s.slice(i) + s.slice(0, i);
    let stack = [];
    let check = true; // 올바른 괄호 문자열 여부

    for (let j of arr) {
      // 여는 괄호인 경우 stack에 push
      if (j === "(" || j === "{" || j === "[") stack.push(j);
      // 닫는 괄호인 경우 stack의 마지막 값과 짝이 맞는 경우 반복문 이어서 순회
      else {
        let last = stack.pop();
        if (last === "(" && j === ")") continue;
        if (last === "{" && j === "}") continue;
        if (last === "[" && j === "]") continue;
        // stack의 마지막 값과 짝이 맞지 않는 경우 반복문 탈출
        else {
          check = false;
          break;
        }
      }
    }
    // 올바른 괄호 문자열이 맞다면 result에 1 추가
    if (check) result++;
  }

  return result;
}
