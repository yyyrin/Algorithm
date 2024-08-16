function solution(dirs) {
  // 4가지 명령어
  const direction = { L: [-1, 0], D: [0, -1], R: [1, 0], U: [0, 1] };
  const check = new Set(); // 캐릭터가 지나간 길 저장할 set
  let [nowX, nowY] = [0, 0]; // 현재 좌표

  for (let dir of dirs) {
    const [dx, dy] = direction[dir]; // 이동할 방향
    const [nextX, nextY] = [nowX + dx, nowY + dy]; // 다음 좌표

    // 다음 좌표가 좌표평면 경계를 넘어가지 않는 경우
    if (nextX >= -5 && nextX <= 5 && nextY >= -5 && nextY <= 5) {
      // 캐릭터가 지나간 길 저장
      check.add(`${nowX}${nowY}${nextX}${nextY}`);
      check.add(`${nextX}${nextY}${nowX}${nowY}`);
      // 다음 좌표로 이동
      nowX = nextX;
      nowY = nextY;
    }
  }

  return check.size / 2;
}
