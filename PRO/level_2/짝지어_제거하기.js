// 틀린 코드 //

function solution(s) {
  let stack = [];
  s.split("").map((e, idx) => {
    stack.push(e);
    if (stack.length > 1 && stack[idx - 1] === stack[idx]) {
      stack.pop();
      stack.pop();
    }
  });
  return stack.length > 0 ? 0 : 1;
}

// 패스한 코드 //

function solution(s) {
  let stack = [];
  s.split("").map(e => {
    if (!stack.length || stack[stack.length - 1] !== e) stack.push(e);
    else stack.pop();
  });
  return stack.length ? 0 : 1;
}
