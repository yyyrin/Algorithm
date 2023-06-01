function solution(order) {
  return order
    .toString()
    .split("")
    .filter((el) => el > 0 && parseInt(el) % 3 === 0).length;
}
