function solution(board, moves) {
  let basket = []; // 바구니
  let doll = 0; // 사라진 인형 개수

  for (let i = 0; i < moves.length; i++) {
    let rowIdx = 0; // 행 idx
    const colIdx = moves[i] - 1; // 열 idx

    // 해당 열에서 값이 0이 아닌 열 idx 찾기
    while (rowIdx < board.length && board[rowIdx][colIdx] === 0) {
      rowIdx++;
    }

    // 행 idx가 board 넘어간 경우
    if (rowIdx === board.length) continue;

    // 선택된 인형의 모양
    const selected = board[rowIdx][colIdx];

    // basket의 마지막 인형의 모양과 일치하는 경우 없애기
    if (basket.length > 0 && Number(basket.slice(-1)) === selected) {
      basket.pop();
      doll += 2;
    } else {
      // basket의 마지막 인형의 모양과 일치하지 않으면 추가하기
      basket.push(selected);
    }
    // board의 기존 값 0으로 변경
    board[rowIdx][colIdx] = 0;
  }

  return doll;
}
