function solution(s) {
  let pCount = yCount = 0;

  s.toLowerCase()
    .split("")
    .forEach((e) => (e === "p" ? pCount++ : e === "y" ? yCount++ : null));
  
  return pCount === yCount;
}

// 다른 풀이
function solution(s) {
  return (
    s.toLowerCase().split("p").length === s.toLowerCase().split("y").length
  );
}
