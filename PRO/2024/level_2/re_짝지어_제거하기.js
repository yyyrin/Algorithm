function solution(s) {
  let stack = [];

  s.split("").forEach((e) => {
    if (!stack.length || stack[stack.length - 1] !== e) stack.push(e);
    else stack.pop();
  });
  
  return stack.length ? 0 : 1;
}
