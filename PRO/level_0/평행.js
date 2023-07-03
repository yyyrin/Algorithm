function solution(dots) {
  let res = 0;

  // y변화량/x변화량 값이 같다면 기울기가 같다는 것 -> res += 1 해주기
  function calculation(a, b, c, d) {
    let ab = (b[1] - a[1]) / (b[0] - a[0]);
    let cd = (d[1] - c[1]) / (d[0] - c[0]);

    if (ab === cd) res += 1;
  }

  // 가능한 조합이 3개 뿐이므로 함수 설정 및 값 넣어주기
  calculation(dots[0], dots[1], dots[2], dots[3]);
  calculation(dots[0], dots[2], dots[1], dots[3]);
  calculation(dots[0], dots[3], dots[1], dots[2]);

  return res > 0 ? 1 : 0;
}
