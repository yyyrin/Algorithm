function solution(n) {
  var i = 2
  var answer = 0
  while(i <= n) {
      answer += i
      i += 2
  } 
  return answer;
}