function solution(a, b, c, d) {
  const numArr = [a, b, c, d];
  const appear = {};

  // 주사위 숫자별로 몇 개가 나왔는지 count
  for (let num of numArr) {
    appear[num] = (appear[num] || 0) + 1;
  }

  const maxCount = Math.max(...Object.values(appear));
  const entries = Object.entries(appear).sort((a, b) => a[1] - b[1]);

  let answer;
  switch (maxCount) {
    case 4:
      answer = a * 1111;
      break;
    case 3:
      answer = (10 * Number(entries[1][0]) + Number(entries[0][0])) ** 2;
      break;
    case 2:
      if (entries.length === 2) {
        answer =
          (Number(entries[0][0]) + Number(entries[1][0])) *
          Math.abs(Number(entries[0][0]) - Number(entries[1][0]));
      } else {
        answer = Number(entries[0][0]) * Number(entries[1][0]);
      }
      break;
    case 1:
      answer = Number(entries[0][0]);
      break;
  }

  return answer;
}
