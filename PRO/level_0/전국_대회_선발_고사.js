// 반복문을 사용하여 처리
function solution(rank, attendance) {
  let numList = [];
  let nowRank = 1;

  while (numList.length < 3) {
    const numIdx = rank.indexOf(nowRank);
    if (attendance[numIdx]) numList.push(numIdx);
    nowRank++;
  }

  return numList[0] * 10000 + numList[1] * 100 + numList[2];
}

// 다른 풀이
// map, filter, sort 함수 이용
/*
function solution(rank, attendance) {
  const [a, b, c] = rank
    .map((r, i) => [r, i])
    .filter(([_, i]) => attendance[i])
    .sort(([a], [b]) => a - b);
  return 10000 * a[1] + 100 * b[1] + c[1];
}
*/
