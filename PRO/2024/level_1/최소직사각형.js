// 내 풀이
function solution(sizes) {
  let firstMax = 0;
  let secondMax = 0;

  sizes.forEach(([garo, sero]) => {
    const first = Math.max(garo, sero);
    const second = Math.min(garo, sero);
    firstMax = Math.max(first, firstMax);
    secondMax = Math.max(second, secondMax);
  });

  return firstMax * secondMax;
}

// 다른 풀이(reduce 사용)
function solution(sizes) {
  const [hor, ver] = sizes.reduce(
    ([h, v], [a, b]) => [
      Math.max(h, Math.max(a, b)),
      Math.max(v, Math.min(a, b)),
    ],
    [0, 0]
  );
  
  return hor * ver;
}
