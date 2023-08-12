function solution(n, control) {
  control.split("").map((e) => {
    if (e === "w") n += 1;
    if (e === "s") n -= 1;
    if (e === "d") n += 10;
    if (e === "a") n -= 10;
  });
  return n;
}
