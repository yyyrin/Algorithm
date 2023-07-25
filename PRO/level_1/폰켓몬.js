function solution(nums) {
  let take = nums.length / 2; // 최대 선택 가능한 개수
  let no_dup = [...new Set(nums)].length; // 중복 제거
  return no_dup >= take ? take : no_dup;
}
