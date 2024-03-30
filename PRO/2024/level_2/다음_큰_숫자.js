function solution(n) {
  const nOneCount = n
    .toString(2)
    .split("")
    .filter((e) => e === "1").length;

  let result = n + 1;

  while (true) {
    if (
      result
        .toString(2)
        .split("")
        .filter((e) => e === "1").length === nOneCount
    )
      return result;
      
    result++;
  }
}
