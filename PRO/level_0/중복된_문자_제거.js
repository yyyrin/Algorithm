function solution(my_string) {
  return my_string
    .split("")
    .filter((el, index) => {
      return my_string.indexOf(el) === index;
    })
    .join("");
}
F;
