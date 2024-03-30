function solution(arr1, arr2) {
  return arr1.map((line, rowIdx) =>
    line.map((e, colIdx) => e + arr2[rowIdx][colIdx])
  );
}
