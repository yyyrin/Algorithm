// 입출차 시간으로 누적 주차 시간(분) 계산하는 함수
function calculateTime(inTime, outTime) {
  const [inHour, inMin] = inTime.split(":").map(Number);
  const [outHour, outMin] = outTime.split(":").map(Number);

  return outHour * 60 + outMin - inHour * 60 - inMin;
}

function solution(fees, records) {
  // 기본 시간, 기본 요금, 단위 시간, 단위 요금
  const [basicTime, basicFee, perTime, perFee] = fees;
  const inTimeObj = {}; // 차량 번호별 입차 시간 저장
  const accTimeObj = {}; // 차량 번호별 누적 주차 시간 저장
  const feeObj = {}; // 차량 번호별 주차 요금 저장

  // 입출차 내역 돌며 차량 번호별 누적 주차 요금 계산
  records.forEach((e) => {
    const [time, carNum, inout] = e.split(" ");
    if (inout === "IN") inTimeObj[carNum] = time;
    else {
      accTimeObj[carNum] =
        (accTimeObj[carNum] || 0) + calculateTime(inTimeObj[carNum], time);
      delete inTimeObj[carNum]; // 출차한 차량 번호의 입차 시간 삭제
    }
  });

  // 출차된 내역 없는 경우, 23:59에 출차된 것으로 간주하여 누적 주차 요금 계산
  for (let [carNum, inTime] of Object.entries(inTimeObj)) {
    accTimeObj[carNum] =
      (accTimeObj[carNum] || 0) + calculateTime(inTime, "23:59");
  }

  // 차량 번호별 주차 요금 계산
  for (let [carNum, accTime] of Object.entries(accTimeObj)) {
    feeObj[carNum] =
      accTime > basicTime
        ? basicFee + Math.ceil((accTime - basicTime) / perTime) * perFee
        : basicFee;
  }

  // 차량 번호를 오름차순으로 정렬하여 주차 요금 배열 리턴
  return Object.entries(feeObj)
    .sort((a, b) => Number(a[0]) - Number(b[0]))
    .map(([_, fee]) => fee);
}
