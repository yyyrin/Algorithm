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
//     .map((e) => e.replace(e[0], e[0].toUpperCase()))  // e[0]이 없는 경우 -> undefined라서 런타임에서 발생
//     .join(" ");
// }
