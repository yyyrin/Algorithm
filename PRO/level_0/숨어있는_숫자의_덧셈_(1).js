function solution(my_string) {
  return my_string
    .split("")
    .filter((x) => !isNaN(x))
    .reduce((sum, curValue) => {
      return Number(sum) + Number(curValue);
    }, 0);
}
