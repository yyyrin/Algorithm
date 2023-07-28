function solution(n, m, section) {
  let res = 0; // 덧칠 횟수
  let wall = new Array(n + 1).fill(0); // index 0~n까지 값이 0인 배열
  section.map((e) => ++wall[e]); // section에 해당하는 곳은 값 1로 변경

  while (wall.includes(1)) {
    ++res; // 덧칠 횟수 1 증가시키기
    wall.splice(wall.indexOf(1), m, 0); // wall에서 값이 1인 첫 번째 index 찾아서 m개 만큼 값을 0으로 변경
  }

  return res;
}
