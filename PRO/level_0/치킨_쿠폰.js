function solution(chicken) {
  let cnt = 0;
  let coupon = chicken;
  while (coupon >= 10) {
    cnt += parseInt(coupon / 10);
    coupon = parseInt(coupon / 10) + parseInt(coupon % 10);
  }
  return cnt;
}
