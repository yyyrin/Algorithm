function solution(keyinput, board) {
  let res = [0, 0];
  // [x축 최소값, 최대값, y축 최소값, 최대값]
  let range = [
    -1 * parseInt(board[0] / 2),
    parseInt(board[0] / 2),
    -1 * parseInt(board[1] / 2),
    parseInt(board[1] / 2),
  ];

  keyinput.map((e) => {
    switch (e) {
      case "left":
        if (res[0] > range[0]) res[0] -= 1;
        break;
      case "right":
        if (res[0] < range[1]) res[0] += 1;
        break;
      case "down":
        if (res[1] > range[2]) res[1] -= 1;
        break;
      case "up":
        if (res[1] < range[3]) res[1] += 1;
        break;
    }
  });
  return res;
}
