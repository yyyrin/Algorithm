function solution(lottos, win_nums) {
  let res = [];
  // 당첨 번호 6개 중 일치하는 것 개수
  let same = lottos.filter((e) => win_nums.includes(e)).length;
  // 민우가 구매한 로또 번호 중 0의 개수
  let zero = lottos.filter((e) => e === 0).length;

  // 당첨 가능한 최고 순위
  zero + same < 2 ? res.push(6) : res.push(7 - zero - same);
  // 당첨 가능한 최저 순위
  same < 2 ? res.push(6) : res.push(7 - same);

  return res;
}
