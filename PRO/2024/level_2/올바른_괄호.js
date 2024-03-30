function solution(s) {
  let stack = [];

  for (let e of s) {
    if (e === ")" && stack[stack.length - 1] === "(") stack.pop();
    else if (e === "(") stack.push(e);
    else return false;
  }

  return stack.length ? false : true;
}
