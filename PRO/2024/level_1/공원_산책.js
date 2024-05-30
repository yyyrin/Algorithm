// 시작 지점 찾기
function findStart(park) {
  for (let i = 0; i < park.length; i++) {
    const index = park[i].indexOf("S");
    if (index !== -1) return [i, index];
  }
}

function solution(park, routes) {
  let [nowX, nowY] = findStart(park); // 현재 위치
  const [W, H] = [park[0].length - 1, park.length - 1]; // 공원 규모(가로 길이, 세로 길이)
  const direction = { E: [0, 1], S: [1, 0], W: [0, -1], N: [-1, 0] };

  for (let i = 0; i < routes.length; i++) {
    let [op, n] = routes[i].split(" "); // 이동할 방향, 이동할 칸 수
    n = Number(n);
    const [dx, dy] = direction[op];

    // 주어진 방향으로 이동할 때 범위 내에 있는지 확인
    if (
      nowX + dx * n < 0 ||
      nowX + dx * n > H ||
      nowY + dy * n < 0 ||
      nowY + dy * n > W
    )
      continue;

    // 장애물 없는지 체크
    let check = true;

    // 주어진 방향으로 이동할 때 장애물 만나는지 확인
    for (let j = 1; j <= n; j++) {
      if (park[nowX + dx * j][nowY + dy * j] === "X") {
        check = false;
        break;
      }
    }

    // 현재 위치 갱신
    if (check) [nowX, nowY] = [nowX + dx * n, nowY + dy * n];
  }

  return [nowX, nowY];
}
