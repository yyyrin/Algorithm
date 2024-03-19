function solution(code) {
  let mode = 0;
  let result = "";

  code.split("").forEach((e, i) => {
    if (e === "1") mode ? mode-- : mode++;
    else if ((mode === 0 && i % 2 === 0) || (mode === 1 && i % 2)) result += e;
  });

  return result || "EMPTY";
}
