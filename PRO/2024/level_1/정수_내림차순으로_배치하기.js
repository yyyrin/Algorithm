function solution(n) {
  return +(n + "")
    .split("")
    .sort((a, b) => Number(b) - Number(a))
    .join("");
}
