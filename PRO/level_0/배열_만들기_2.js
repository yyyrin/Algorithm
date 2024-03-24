function solution(l, r) {
  let result = [];

  for (let i = l; i <= r; i++) {
    if ([...i.toString()].every((e) => e === "5" || e === "0")) result.push(i);
  }

  return result.length ? result : [-1];
}
