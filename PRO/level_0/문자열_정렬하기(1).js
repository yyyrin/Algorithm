function solution(my_string) {
  return my_string
    .split("")
    .map(Number)
    .filter((value) => !isNaN(value))
    .sort((a, b) => a - b);
}
