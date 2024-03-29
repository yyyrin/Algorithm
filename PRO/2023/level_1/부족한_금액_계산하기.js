function solution(price, money, count) {
  let ans = (count * (2 * price + (count - 1) * price)) / 2;
  return ans < money ? 0 : ans - money;
}
