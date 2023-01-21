function solution(money) {
  var answer = [];
  var cups = parseInt(money / 5500)
  answer.push(cups, money-cups*5500)
  return answer;
}