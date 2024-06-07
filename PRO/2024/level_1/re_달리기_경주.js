function solution(players, callings) {
  // 선수 이름별로 인덱스값 저장할 객체
  const playersObj = {};

  players.forEach((player, idx) => {
    playersObj[player] = idx;
  });

  // 1등부터 순서대로 선수 이름 저장한 배열
  let copyedPlayers = [...players];

  callings.forEach((calling) => {
    const nowIdx = playersObj[calling]; // 현재 인덱스 값
    const temp = copyedPlayers[nowIdx - 1]; // 추월한 선수 이름

    // 추월한 선수와 추월당한 선수 순서 바꾸기
    copyedPlayers[nowIdx - 1] = calling;
    copyedPlayers[nowIdx] = temp;

    // 추월한 선수와 추월당한 선수의 인덱스값 갱신
    playersObj[calling] = nowIdx - 1;
    playersObj[temp] = nowIdx;
  });

  return copyedPlayers;
}
