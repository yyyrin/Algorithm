function solution(myString) {
  return myString.split("x").map((e) => {
    return e.length;
  });
}
