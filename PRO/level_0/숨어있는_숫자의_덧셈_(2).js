function solution(my_string) {
  // 숫자 0~9를 모두 찾는다. (최소 한개)
  const nums = my_string.match(/[0-9]+/g);
  return nums
    ? nums.map((e) => Number(e)).reduce((acc, cur) => acc + cur, 0)
    : 0;
}
