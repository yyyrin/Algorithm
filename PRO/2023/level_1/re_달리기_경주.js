function solution(players, callings) {
  const playersObj = {};

  // 선수와 등수를 객체로 저장
  players.forEach((player, idx) => {
    playersObj[player] = idx;
  });

  // forEach 안에서 기존 배열 수정할 수 업기 때문에 기존 배열 복사
  const updatedPlayers = [...players];

  callings.forEach((calling) => {
    const nowIdx = playersObj[calling];
    const temp = updatedPlayers[nowIdx - 1];

    // 해당 idx와 이전 idx swap
    updatedPlayers[nowIdx - 1] = calling;
    updatedPlayers[nowIdx] = temp;

    // 선수별 등수 저장한 객체 update
    playersObj[calling] = nowIdx - 1;
    playersObj[temp] = nowIdx;
  });

  return updatedPlayers;

  // 기존 코드 -> 시간 초과
  /*
  callings.forEach((e) => {
    const nowIdx = players.indexOf(e);
    players.splice(nowIdx, 1);
    players.splice(nowIdx - 1, 0, e);
  });
  
  return players;
  */
}
