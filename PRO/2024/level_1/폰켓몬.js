// sort와 filter를 사용한 풀이
function solution(nums) {
  const maxCnt = nums
    .sort((a, b) => a - b)
    .filter((e, i) => i === nums.lastIndexOf(e)).length;

  return maxCnt > nums.length / 2 ? nums.length / 2 : maxCnt;
}

// Set을 사용한 풀이
function solution(nums) {
  const maxCnt = new Set(nums);

  return maxCnt.size > nums.length / 2 ? nums.length / 2 : maxCnt.size;
}
