function solution(babbling) {
  const baby = ["aya", "ye", "woo", "ma"];
  let res = 0;

  for (let i in babbling) {
    let word = babbling[i];

    for (let j in baby) {
      // 2번 이상 연속되는 경우 처리
      if (babbling[i].includes(baby[j].repeat(2))) break;

      word = word.split(baby[j]).join(" ");
    }

    if (word.split(" ").join("").length < 1) res++;
  }
  return res;
}

// 통과하지 못한 코드
// function solution(babbling) {
//   const baby = ["aya", "ye", "woo", "ma"];
//   let res = 0;

//   for (let i in babbling) {
//     let word = babbling[i];

//     for (let j in baby) {
//       if (babbling[i].includes(baby[j])) {
//         word = word.replace(baby[j], "");
//       }
//     }

//     if (word.length < 1) res++;
//   }
//   return res;
// }
