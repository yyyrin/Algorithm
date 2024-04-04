function solution(n, a, b) {
  let answer = 0;

  while (true) {
    answer++;
    a = Math.ceil(a / 2);
    b = Math.ceil(b / 2);
    if (a === b) break;
  }
  
  return answer;
}
