function solution(strArr) {
  let arr = new Array(31).fill(0);

  strArr.forEach((e) => {
    arr[e.length]++;
  });

  return Math.max(...arr);
}
