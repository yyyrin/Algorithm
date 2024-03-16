function solution(arr, flag) {
  let result = [];

  arr.forEach((e, i) => {
    if (flag[i]) {
      for (let i = 0; i < e * 2; i++) result.push(e);
    } else {
      for (let i = 0; i < e; i++) result.pop();
    }
  });

  return result;
}
