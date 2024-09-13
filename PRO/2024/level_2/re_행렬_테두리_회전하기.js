function solution(rows, columns, queries) {
  // rows x columns 행렬
  let arr = Array.from(Array(rows), () => Array(columns).fill(0));
  let result = [];

  // arr에 1 ~ rows*columns까지 값 넣기
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) arr[i][j] = i * columns + j + 1;
  }

  queries.forEach((query) => {
    const [x1, y1, x2, y2] = query.map((e) => --e);
    let [nx, ny] = [x1, y2]; // 현재 위치(오른쪽 위부터 반시계 방향으로 회전)
    const cddt = [arr[nx][ny]]; // 시작 위치 값 저장

    while (ny > y1) cddt.push((arr[nx][ny] = arr[nx][--ny]));
    while (nx < x2) cddt.push((arr[nx][ny] = arr[++nx][ny]));
    while (ny < y2) cddt.push((arr[nx][ny] = arr[nx][++ny]));
    while (nx > x1) cddt.push((arr[nx][ny] = arr[--nx][ny]));

    arr[nx + 1][ny] = cddt[0]; // 시작 위치 값 입력
    result.push(Math.min(...cddt)); // 회전 요소 중 최솟값
  });

  return result;
}
