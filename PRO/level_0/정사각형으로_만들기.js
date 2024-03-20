function solution(arr) {
  const rowCount = arr.length;
  const colCount = arr[0].length;

  if (rowCount > colCount) {
    return arr.map((line) => {
      return [...line, ...new Array(rowCount - colCount).fill(0)];
    });
  }

  if (rowCount < colCount) {
    return [
      ...arr,
      ...Array.from(Array(colCount - rowCount), () => Array(colCount).fill(0)),
    ];
  }

  return arr;
}
