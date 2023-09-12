function solution(dirs) {
  const direction = { U: [-1, 0], D: [1, 0], R: [0, 1], L: [0, -1] };
  let visited = new Set();
  let now = [0, 0];

  for (let dir of dirs) {
    let nx = now[0] + direction[dir][0];
    let ny = now[1] + direction[dir][1];

    if (nx < -5 || nx > 5 || ny < -5 || ny > 5) continue;

    visited.add(`${now[0]}${now[1]}${nx}${ny}`);
    visited.add(`${nx}${ny}${now[0]}${now[1]}`);

    now = [nx, ny];
  }

  return visited.size / 2;
}

// 틀린 코드
// function solution(dirs) {
//   const direction = { U: [-1, 0], D: [1, 0], R: [0, 1], L: [0, -1] };
//   let visited = Array.from(Array(11), () => Array(11).fill(false));

//   let now = [5, 5];
//   visited[now[0]][now[1]] = true;
//   let count = 0;

//   dirs.split("").map((e) => {
//     let [nx, ny] = direction[e];
//     nx += now[0];
//     ny += now[1];
//     if (nx > -1 && nx < 11 && ny > -1 && ny < 11) {
//       if (!visited[nx][ny]) {
//         count++;
//         visited[nx][ny] = true;
//       }
//       now = [nx, ny];
//     }
//   });
//   return count;
// }
