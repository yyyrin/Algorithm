const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let array = []; // input값 저장할 배열
let rooms = {}; // 회의실 현황

rl.on("line", (line) => {
  array.push(line.trim());
}).on("close", () => {
  // 전체 회의실 수, 예약 건수
  [total_rooms, reserved_cnt] = array[0].split(" ").map(Number);
  let rooms_name = []; // 회의실 이름만 저장

  // 회의실 개수만큼 순회하면서 회의실 이름 배열과 회의실 예약 현황 객체에 넣어주기
  for (let i = 1; i <= total_rooms; i++) {
    let room_name = array[i];
    rooms_name.push(room_name);
    rooms[room_name] = new Array(9).fill(0);
  }

  // 회의실 이름 오름차순 정렬
  rooms_name.sort();

  // 각 회의실의 예약된 시간에 +1하기
  for (let i = total_rooms + 1; i < array.length; i++) {
    let [room_name, start_time, end_time] = array[i].split(" ");
    for (let j = parseInt(start_time) - 9; j < parseInt(end_time) - 9; j++) {
      rooms[room_name][j] += 1;
    }
  }

  // 출력하기
  for (let i = 0; i < total_rooms; i++) {
    let name = rooms_name[i]; // 회의실 이름

    // 1) 회의실 이름 출력
    console.log(`Room ${name}:`);

    // 2) 예약 가능 시간 출력
    let reserved_check = rooms[name]; // 해당 회의실의 사용 가능 여부
    let cnt = 0; // 예약 가능한 시간대 개수
    let start = -1; // 0이 시작하는 시간
    let available_times = []; // 예약 가능한 시간 저장하는 배열

    for (let i = 0; i < reserved_check.length; i++) {
      // 예약 가능한 시간대 시작 시간 찾기
      if (reserved_check[i] === 0 && (i === 0 || reserved_check[i - 1] === 1))
        start = i + 9;

      // 예약 가능한 시간대 추가 및 cnt에 1 더하기
      if (reserved_check[i] === 1 && start !== -1) {
        available_times.push(
          `${String(start).padStart(2, "0")}-${String(i + 9).padStart(2, "0")}`
        );
        start = -1;
        cnt++;
      }
    }

    // 배열의 마지막 원소가 0인 경우 처리
    if (start !== -1) {
      available_times.push(`${String(start).padStart(2, "0")}-18`);
      cnt++;
    }

    // 예약 가능한 시간이 없는 경우
    if (!cnt) console.log("Not available");
    // 예약 가능한 시간이 있는 경우
    else {
      console.log(`${cnt} available:`);
      available_times.forEach((e) => console.log(e));
    }

    // 3) 구분선 출력
    if (i !== total_rooms - 1) console.log("-----");
  }

  process.exit();
});
