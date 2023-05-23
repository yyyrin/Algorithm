function solution(my_string) {
  let ans = "";
  for (let i = 0; i < my_string.length; i++) {
    if (my_string[i] === my_string[i].toUpperCase()) {
      ans += my_string[i].toLowerCase();
    } else {
      ans += my_string[i].toUpperCase();
    }
  }
  return ans;
}
