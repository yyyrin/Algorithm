function solution(s) {
  return s
    .toLowerCase()
    .split(" ")
    .map((e) => e.substr(0, 1).toUpperCase() + e.substr(1))
    .join(" ");
}

// 런타임 에러
// function solution(s) {
//   return s
//     .toLowerCase()
//     .split(" ")
//     .map((e) => e.replace(e[0], e[0].toUpperCase()))
//     .join(" ");
// }
