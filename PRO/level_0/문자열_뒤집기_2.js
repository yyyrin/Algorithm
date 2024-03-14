function solution(my_string, s, e) {
  let result = my_string.slice(0, s);

  for (let i = e; i >= s; i--) {
    result += my_string[i];
  }

  return result + my_string.slice(e + 1);
}

// 풀이 추가
function solution(my_string, s, e) {
  return (
    my_string.slice(0, s) +
    [...my_string.slice(s, e + 1)].reverse().join("") +
    my_string.slice(e + 1)
  );
}
