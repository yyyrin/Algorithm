function solution(ingredient) {
  let cnt = 0;
  let stack = [];

  ingredient.forEach((e) => {
    stack.push(e);
    // 햄버거 만들 수 있는 경우
    if (stack.length >= 4 && stack.slice(-4).join("") === "1231") {
      cnt++;
      stack.pop();
      stack.pop();
      stack.pop();
      stack.pop();
    }
  });

  return cnt;
}
