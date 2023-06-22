function solution(score) {
  let ans = [];
  let avg = score.map((e) => e.reduce((acc, cur) => (acc + cur) / 2)); // 평균 저장한 배열
  let sorted_avg = [...avg].sort((a, b) => b - a); // avg 내림차순으로 정렬
  // avg.sort((a,b) => b-a) 이렇게 하면 원본 배열 정렬됨!
  avg.map((e) => {
    ans.push(sorted_avg.indexOf(e) + 1);
  });
  return ans;
}
