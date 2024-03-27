function solution(n) {
  let resArr = Array.from(Array(n), () => Array(n).fill(0));

  let rowMin = 1,
    rowMax = n - 1;
  let colMin = 0,
    colMax = n - 1;
  let row = (col = 0);

  let dir = "r";
  for (let i = 1; i <= n * n; i++) {
    resArr[row][col] = i;

    if (dir === "r") {
      if (col === colMax) colMax--, row++, (dir = "b");
      else col++;
    } else if (dir === "b") {
      if (row === rowMax) rowMax--, col--, (dir = "l");
      else row++;
    } else if (dir === "l") {
      if (col === colMin) colMin++, row--, (dir = "t");
      else col--;
    } else if (dir === "t") {
      if (row === rowMin) rowMin++, col++, (dir = "r");
      else row--;
    }
  }

  return resArr;
}
