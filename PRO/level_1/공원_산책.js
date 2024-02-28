// 시작 지점 찾는 함수
function findStart(park) {
  for (let i = 0; i < park.length; i++) {
    const index = park[i].indexOf("S");
    if (index !== -1) return [i, index];
  }
}

function solution(park, routes) {
  park = park.map((e) => e.split(""));
  const W = park[0].length; // 공원의 가로 길이
  const H = park.length; // 공원의 세로 길이
  let now = findStart(park); // 현재 좌표 [x, y]
  const dirObj = { E: [0, 1], W: [0, -1], S: [1, 0], N: [-1, 0] };

  for (let i = 0; i < routes.length; i++) {
    let [op, n] = routes[i].split(" ");
    n = Number(n);
    const nextDir = dirObj[op]; // 이동할 방향
    const [newX, newY] = [now[0] + nextDir[0] * n, now[1] + nextDir[1] * n]; // 이동할 좌표

    // 이동할 좌표가 공원을 벗어나지 않는다면
    if (newX >= 0 && newX < H && newY >= 0 && newY < W) {
      let check = 0;
      // 이동 중에 장애물을 만나는지 체크
      for (let k = 1; k <= n; k++) {
        if (park[now[0] + nextDir[0] * k][now[1] + nextDir[1] * k] === "X")
          break;
        check++;
      }
      if (check === n) now = [newX, newY];
    }
  }

  return now;
}
