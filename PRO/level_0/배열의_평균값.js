function solution(numbers) {
  var len = numbers.length
  var sum = 0
  for(var i = 0; i < len; i++) {
      sum += numbers[i]
  }
  answer = sum / len
  return answer;
}