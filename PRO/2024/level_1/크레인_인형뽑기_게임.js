function solution(board, moves) {
  const obj = {};
  let stack = [];
  let cnt = 0;

  for (let i = board.length - 1; i >= 0; i--) {
    for (let j = 0; j < board[0].length; j++) {
      // board의 해당 값이 0이 아니라면
      if (board[i][j]) {
        // 열 인덱스 번호+1을 키 값으로 하는 배열에 해당 값 push
        obj[j + 1]
          ? obj[j + 1].push(board[i][j])
          : (obj[j + 1] = [board[i][j]]);
      }
    }
  }

  for (let i = 0; i < moves.length; i++) {
    // 해당하는 열에 값이 없는 경우
    if (obj[moves[i]].length < 1) continue;

    const num = obj[moves[i]].pop(); // 크레인이 잡은 인형의 번호
    // 바구니의 마지막 값과 현재 잡은 번호가 같다면
    if (stack.length && Number(stack.slice(-1)) === num) {
      cnt += 2;
      stack.pop();
    } else stack.push(num);
  }

  return cnt;
}
