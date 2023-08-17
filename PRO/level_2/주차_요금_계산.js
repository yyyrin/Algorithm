// 수정한 코드 //

// 시간을 분으로 계산
function timeToMinutes(time) {
  const [hours, minutes] = time.split(":").map(Number);
  return hours * 60 + minutes;
}

// 요금 계산
function calculateFee(minutes, basic_time, basic_fee, unit_time, unit_fee) {
  if (minutes <= basic_time) return basic_fee;
  return basic_fee + Math.ceil((minutes - basic_time) / unit_time) * unit_fee;
}

function solution(fees, records) {
  // 기본 시간, 기본 요금, 단위 시간, 단위 요금
  const [basic_time, basic_fee, unit_time, unit_fee] = fees;
  let parking_minutes = {}; // 차량별 누적 주차 시간
  let parking_in = {}; // 차량별 입차 기록

  records.forEach((record) => {
    // 시각, 차량 번호, 내역
    const [time, car_number, io] = record.split(" ");
    // 입차
    if (io === "IN") {
      parking_in[car_number] = time;
    }
    // 출차
    if (io === "OUT") {
      // 주차 시간
      const minutesParked =
        timeToMinutes(time) - timeToMinutes(parking_in[car_number]);
      parking_minutes[car_number] =
        (parking_minutes[car_number] || 0) + minutesParked;
      delete parking_in[car_number];
    }
  });

  // 입차된 후 출차된 내역 없는 경우
  for (const car in parking_in) {
    const minutesParked =
      timeToMinutes("23:59") - timeToMinutes(parking_in[car]);
    parking_minutes[car] = (parking_minutes[car] || 0) + minutesParked;
  }

  // 주차 요금 계산
  const sortedCars = Object.keys(parking_minutes).sort(
    (a, b) => Number(a) - Number(b)
  );
  const result = sortedCars.map((car) =>
    calculateFee(
      parking_minutes[car],
      basic_time,
      basic_fee,
      unit_time,
      unit_fee
    )
  );

  return result;
}

// 기존 코드 //
// function solution(fees, records) {
//   // 기본 시간, 기본 요금, 단위 시간, 단위 요금
//   const [basic_time, basic_fee, unit_time, unit_fee] = fees;
//   let parking_minutes = {}; // 차량별 누적 주차 시간
//   let parking_in = {}; // 차량별 입차 기록
//   let res = [];

//   records.forEach((ele, idx) => {
//     // 시각, 차량 번호, 내역
//     const [time, car_number, io] = ele.split(" ");
//     // 입차
//     if (io === "IN") {
//       parking_in[car_number] = time;
//     }
//     // 출차
//     if (io === "OUT") {
//       let in_time = parking_in[car_number].split(":").map(Number);
//       let out_time = time.split(":").map(Number);
//       let minutes = 0;

//       if (out_time[1] > in_time[1]) minutes += out_time[1] - in_time[1];
//       else if (out_time[1] < in_time[1]) {
//         minutes += 60 + out_time[1] - in_time[1];
//         out_time[0] -= 1;
//       }
//       minutes += (out_time[0] - in_time[0]) * 60;
//       if (car_number in parking_minutes) parking_minutes[car_number] += minutes;
//       else parking_minutes[car_number] = minutes;

//       delete parking_in[car_number];
//     }
//   });

//   // 입차된 후 출차된 내역 없는 경우
//   while (Object.keys(parking_in).length > 0) {
//     let keys = Object.keys(parking_in);
//     let in_time = parking_in[keys[0]].split(":").map(Number);
//     let minutes = (23 - in_time[0]) * 60 + (59 - in_time[1]);
//     if (keys[0] in parking_minutes) parking_minutes[keys[0]] += minutes;
//     else parking_minutes[keys[0]] = minutes;
//     delete parking_in[keys[0]];
//   }

//   // 주차 요금 계산
//   let keys = Object.keys(parking_minutes);
//   const keys_len = keys.length;
//   for (let i = 0; i < keys_len; i++) {
//     let min_idx = 0;
//     if (keys.length > 1)
//       min_idx = keys.map(Number).indexOf(Math.min(...keys.map(Number)));
//     let fee = basic_fee;
//     // 기본 시간 초과한 경우
//     if (parking_minutes[keys[min_idx]] > basic_time) {
//       fee +=
//         Math.ceil((parking_minutes[keys[min_idx]] - basic_time) / unit_time) *
//         unit_fee;
//     }
//     res.push(fee);
//     keys.splice(min_idx, 1);
//   }

//   return res;
// }
