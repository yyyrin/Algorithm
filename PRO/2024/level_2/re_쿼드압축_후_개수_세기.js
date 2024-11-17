function solution(arr) {
  let result = [0, 0];

  function divide(row, col, len) {
    let diviable = true;

    for (let i = row; i < row + len; i++) {
      for (let j = col; j < col + len; j++) {
        // 맨 처음 값과 동일하지 않은 경우
        if (arr[row][col] !== arr[i][j]) {
          diviable = false;
          break;
        }
      }
    }

    let half = len / 2;

    // 정사각형 모양으로 같은 값이 아닌 경우
    if (!diviable) {
      divide(row + half, col, half); // 1 quad
      divide(row, col, half); // 2 quad
      divide(row, col + half, half); // 3 quad
      divide(row + half, col + half, half); // 4 quad
    } else result[arr[row][col]]++;
  }

  divide(0, 0, arr.length);
  return result;
}
