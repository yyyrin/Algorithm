function solution(arr) {
  let stk = [];

  for (let i = 0; i < arr.length; i++) {
    if (stk.length && stk[stk.length - 1] === arr[i]) stk.pop();
    else stk.push(arr[i]);
  }

  return stk.length ? stk : [-1];
}
