function solution(num_list) {
  const sum = num_list.reduce((acc, cur) => acc + cur, 0);
  const multi = num_list.reduce((acc, cur) => acc * cur, 1);
  return sum ** 2 > multi ? 1 : 0;
}
