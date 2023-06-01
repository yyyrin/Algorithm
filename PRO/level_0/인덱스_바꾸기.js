function solution(my_string, num1, num2) {
  let ans = "";
  for (let i = 0; i < my_string.length; i++) {
    if (i === num1) {
      ans += my_string[num2];
    } else if (i === num2) {
      ans += my_string[num1];
    } else {
      ans += my_string[i];
    }
  }
  return ans;
}

// function solution(my_string, num1, num2) {
//     my_string = my_string.split('');
//     [my_string[num1], my_string[num2]] = [my_string[num2], my_string[num1]];
//     return my_string.join('');
// }
