//  [BOJ] 4659. 비밀번호 발음하기

const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

input.pop(); // 마지막 테스트 케이스 삭제
const vowel = ["a", "e", "i", "o", "u"];
const allowTwice = ["ee", "oo"];

for (let i = 0; i < input.length; i++) {
  const word = input[i];
  let vowelCount = 0;
  let consonantCount = 0;
  let isAcceptable = true;

  // 모음을 하나로 포함하지 않는 경우
  if (!vowel.some((e) => word.includes(e))) {
    console.log(`<${word}> is not acceptable.`);
    continue;
  }

  for (let i = 0; i < word.length; i++) {
    const currentChar = word[i];
    const nextChar = word[i + 1];

    // 같은 글자가 연속적으로 두 번 오는 경우(ee와 oo 제외)
    if (
      currentChar === nextChar &&
      !allowTwice.includes(currentChar + nextChar)
    ) {
      console.log(`<${word}> is not acceptable.`);
      isAcceptable = false;
      break;
    }

    // 모음이 3개 혹은 자음이 3개 연속 오는 경우
    if (vowel.includes(currentChar)) {
      consonantCount = 0;
      vowelCount++;
      if (vowelCount >= 3) {
        console.log(`<${word}> is not acceptable.`);
        isAcceptable = false;
        break;
      }
    } else {
      vowelCount = 0;
      consonantCount++;
      if (consonantCount >= 3) {
        console.log(`<${word}> is not acceptable.`);
        isAcceptable = false;
        break;
      }
    }
  }

  if (isAcceptable) console.log(`<${word}> is acceptable.`);
}
