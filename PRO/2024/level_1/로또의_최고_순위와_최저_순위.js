function solution(lottos, win_nums) {
  const same = lottos.filter((e) => win_nums.includes(e)).length;
  const zero = lottos.filter((e) => e === 0).length;

  return [same + zero < 2 ? 6 : 7 - zero - same, same < 2 ? 6 : 7 - same];
}
