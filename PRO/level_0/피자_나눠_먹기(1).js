function solution(n) {
  var answer = 1;
  while(answer * 7 < n) {
      answer += 1
  }
  return answer;
}