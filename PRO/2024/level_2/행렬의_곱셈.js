function solution(arr1, arr2) {
  let result = Array.from(Array(arr1.length), () =>
    Array(arr2[0].length).fill(0)
  );

  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2[0].length; j++) {
      result[i][j] = arr1[i].reduce(
        (acc, cur, idx) => acc + cur * arr2[idx][j],
        0
      );
    }
  }
  return result;
}
