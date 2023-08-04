const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let array = []; // 입력값 담을 배열

const numbers = [
  "1110111",
  "0010010",
  "1011101",
  "1011011",
  "0111010",
  "1101011",
  "1101111",
  "1110010",
  "1111111",
  "1111011",
];

rl.on("line", (line) => {
  let input = line.split(" ");
  array = [...array, ...input];
  // array에 input 값을 모두 넣음
}).on("close", () => {
  // 테스트 케이스 수만큼 for문 돌리기
  for (let i = 0; i < array[0]; i++) {
    let cnt = 0; // 스위치 눌러야 하는 횟수
    let from_num = array[i * 2 + 1].padStart(5, "_"); // A를 5자리로 만들되, 빈 자리는 "_"로 넣기
    let to_num = array[i * 2 + 2].padStart(5, "_"); // B를 5자리로 만들되, 빈 자리는 "_"로 넣기

    // A와 B의 길이가 모두 5이므로
    for (let j = 0; j < 5; j++) {
      if (from_num[j] === to_num[j]) continue; // 같은 자릿수의 값이 같으면 패스

      // 둘 중 하나의 자릿수가 "_"라면
      // numbers에서 다른 한 쪽의 값을 인덱스로 하는 값의 1의 개수만큼 cnt에 더해주기
      if (from_num[j] === "_")
        cnt += numbers[to_num[j]].split("").filter((e) => e === "1").length;
      if (to_num[j] === "_")
        cnt += numbers[from_num[j]].split("").filter((e) => e === "1").length;

      // 둘 다 숫자라면
      // numbers에서 해당 인덱스 값을 찾아서 하나하나 비교하여 다르면 cnt에 1추가
      if (from_num[j] !== "_" && to_num[j] !== "_") {
        numbers[from_num[j]].split("").map((e, i) => {
          if (e !== numbers[to_num[j]][i]) cnt += 1;
        });
      }
    }

    console.log(cnt);
  }
  process.exit();
});
