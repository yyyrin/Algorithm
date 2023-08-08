const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const lines = [];

rl.on("line", (line) => {
  lines.push(line.split(" "));
}).on("close", () => {
  // [비밀메뉴 조작법 길이, 사용자가 누른 버튼 개수 , 총 버튼 개수]
  [secret, selected, total] = lines[0].map(Number);
  let secret_str = lines[1].join(""); // 비밀메뉴 조작법
  let selected_arr = lines[2]; // 사용자의 버튼 조작

  // 사용자의 버튼 조작이 비밀 메뉴 조작법보다 짧은 경우(출력예제4 처리)
  if (selected < secret) {
    console.log("normal");
    process.exit();
  }

  // 비밀 메뉴 조작이 있는지 회문 돌면서 찾기
  for (let i = 0; i <= selected - secret; i++) {
    if (
      selected_arr[i] === secret_str[0] &&
      selected_arr.slice(i, i + secret).join("") === secret_str
    ) {
      console.log("secret");
      process.exit();
    }
  }

  // 비밀 메뉴 조작이 없는 경우
  console.log("normal");
  process.exit();
});
