function solution(n, t, m, p) {
  let numbers = [];
  let num = 0;

  // n진법으로 바꾸기
  while (numbers.length < t * m) {
    numbers.push(...num.toString(n).split(""));
    num++;
  }

  // 자신의 순서에 맞는 값만 필터링
  let ans = numbers
    .filter((_, idx) => {
      return idx % m === p - 1;
    })
    .slice(0, t)
    .join("");

  return ans.toUpperCase();
}
