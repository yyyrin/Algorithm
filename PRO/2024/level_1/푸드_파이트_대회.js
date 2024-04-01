function solution(food) {
  const arr = food
    .map((e, i) => (i + "").repeat(Math.floor(e / 2)))
    .filter((e) => e.length);
    
  return arr.join("") + "0" + arr.reverse().join("");
}
