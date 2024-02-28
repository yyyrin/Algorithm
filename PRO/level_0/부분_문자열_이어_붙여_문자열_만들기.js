function solution(my_strings, parts) {
  let res = "";
  my_strings.forEach((e, i) => (res += e.slice(parts[i][0], parts[i][1] + 1)));
  return res;
}
