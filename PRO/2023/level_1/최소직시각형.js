function solution(sizes) {
  let garo = 0; // 가로, 세로 중 큰값
  let sero = 0; // 가로, 세로 중 작은값
  sizes.forEach((e) => {
    e.sort((a, b) => b - a);
    if (e[0] > garo) garo = e[0]; // 큰값 갱신
    if (e[1] > sero) sero = e[1]; // 작은값 갱신
  });
  return garo * sero;
}
