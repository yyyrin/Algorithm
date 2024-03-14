function solution(my_string, s, e) {
  let result = my_string.slice(0, s);

  for (let i = e; i >= s; i--) {
    result += my_string[i];
  }
  
  return result + my_string.slice(e + 1);
}
