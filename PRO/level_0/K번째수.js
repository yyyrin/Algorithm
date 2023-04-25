function solution(array, commands) {
  var answer = [];
  for (let i=0;i<commands.length;i++) {
      let new_arr = array.slice(commands[i][0]-1, commands[i][1])
      let sorted_arr = new_arr.sort((a, b) => a - b)
      answer.push(sorted_arr[commands[i][2]-1])
  }
  return answer;
}