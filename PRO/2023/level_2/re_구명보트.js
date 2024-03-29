// 다시 풀기!

function solution(people, limit) {
  let ans = 0;
  people = people.sort((a, b) => b - a);

  for (let i = 0, j = people.length - 1; i <= j; i++, ans++) {
    if (people[i] + people[j] <= limit) j--;
  }
  return ans;
}
