function solution(progresses, speeds) {
  let res = [];
  let stack = [];

  for (let i = 0; i < progresses.length; i++) {
    let days = Math.ceil((100 - progresses[i]) / speeds[i]);

    // stack 최댓값이 days보다 작다면
    if (stack.length > 0 && days > Math.max(...stack)) {
      res.push(stack.length);
      stack = [days];
    } else stack.push(days);

    // 마지막 작업이라면
    if (i === progresses.length - 1) {
      res.push(stack.length);
    }
  }

  return res;
}
