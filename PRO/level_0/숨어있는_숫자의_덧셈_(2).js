function solution(my_string) {
  const nums = my_string.match(/[0-9]+/g);
  return nums
    ? nums.map((e) => Number(e)).reduce((acc, cur) => acc + cur, 0)
    : 0;
}
