function solution(nums) {
  let res = 0; // 소수 개수
  // nums 오름차순 정렬하여 뒤에서 3개 합 구해서 최댓값 구하기
  let max_num = nums
    .sort((a, b) => a - b)
    .reduce((acc, cur, idx) => (idx > nums.length - 4 ? acc + cur : null), 0);

  // 에라토스테네스 체 이용하여 소수 찾기
  let prime_arr = Array(max_num + 1).fill(true);
  prime_arr[0] = false;
  prime_arr[1] = false;
  for (let i = 2; i * i <= max_num; i++) {
    if (prime_arr[i]) {
      for (let j = i * i; j <= max_num; j += i) {
        prime_arr[j] = false;
      }
    }
  }

  for (let i = 0; i < nums.length - 2; i++) {
    for (let j = i + 1; j < nums.length - 1; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        if (prime_arr[nums[i] + nums[j] + nums[k]]) res += 1;
      }
    }
  }
  return res;
}
