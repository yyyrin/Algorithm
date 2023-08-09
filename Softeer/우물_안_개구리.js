const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let lines = [];

rl.on("line", (line) => {
  lines.push(line.split(" ").map(Number));
}).on("close", () => {
  // [회원 수, 친분관계 개수]
  let [members, connects] = lines[0];
  // 회원 번호를 인덱스로 사용하기 위해 맨 앞에 0추가
  let weights = [0, ...lines[1]];
  let frog_member = new Array(members + 1).fill(1);

  // 최고라고 생각하는 회원이 될 수 없는 회원 처리
  for (let i = 2; i < lines.length; i++) {
    let a = lines[i][0];
    let b = lines[i][1];

    if (weights[a] > weights[b]) {
      frog_member[b] = 0;
    } else if (weights[b] > weights[a]) {
      frog_member[a] = 0;
    } else {
      frog_member[a] = 0;
      frog_member[b] = 0;
    }
  }

  // frog_member[0] = 1이므로 총 합에서 -1해주기
  console.log(frog_member.reduce((acc, cur) => acc + cur, 0) - 1);
  process.exit();
});
