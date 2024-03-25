function solution(my_string) {
  let result = new Array(52).fill(0);

  my_string
    .split("")
    .forEach((e) =>
      e === e.toUpperCase()
        ? result[e.charCodeAt() - 65]++
        : result[e.charCodeAt() - 71]++
    );
    
  return result;
}
