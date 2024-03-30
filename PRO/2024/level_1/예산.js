function solution(d, budget) {
  let result = 0;

  for (let money of d.sort((a, b) => a - b)) {
    if (budget >= money) {
      budget -= money;
      result++;
    } else break;
  }

  return result;
}
