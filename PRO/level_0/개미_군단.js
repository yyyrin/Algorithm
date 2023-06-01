function solution(hp) {
  let cnt1 = Math.floor(hp / 5);
  let cnt2 = Math.floor((hp - cnt1 * 5) / 3);
  let cnt3 = hp - cnt1 * 5 - cnt2 * 3;
  return cnt1 + cnt2 + cnt3;
}
