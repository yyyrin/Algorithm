// 통과한 코드
function solution(n) {
  let res = 1; // 자기자신

  // 내림차순으로 더하기 (오름차순으로 했을 때 시간초과 발생)
  for (let i = parseInt(n / 2) + 1; i > 1; i--) {
    let sum = i;
    for (let j = i - 1; j > 0; j--) {
      sum += j; // 연속해서 수 더하기
      if (sum > n) break; // n보다 수의 합이 크면 break

      // 연속한 자연수의 합이 n인 경우
      if (sum === n) {
        res += 1;
        break;
      }
    }
  }
  return res;
}

// 답도 틀리고 시간초과 발생한 코드
// function solution(n) {
//   let res = 1;
//   for (let i = 1; i < n / 2 + 1; i++) {
//     let sum = 0;
//     let plus = i;
//     while (sum <= n) {
//       sum += plus;
//       plus += 1;
//       if (sum === n) {
//         res += 1;
//         break;
//       }
//     }
//   }
//   return res;
// }