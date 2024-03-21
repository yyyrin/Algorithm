function solution(arr) {
  let stk = [arr[0]];
  let i = 1;
  for (let e = 1; e < arr.length; e++) {
    if (stk.length) {
      if (stk[stk.length - 1] < arr[i]) {
        stk.push(arr[i]);
        i++;
      } else {
        stk.pop();
      }
    }
  }

  return stk;
}
