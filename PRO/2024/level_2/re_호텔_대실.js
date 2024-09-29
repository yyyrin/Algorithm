// HH:MM -> MM 으로 바꾸는 함수
function timeToMinutes(arr) {
  return Number(arr[0]) * 60 + Number(arr[1]);
}

function solution(book_time) {
  const room = []; // 객실별 이용 가능 시간 저장

  // HH:MM -> MM 으로 바꾼 후 시작 시간 기준 오름차순 정렬
  const sortedArr = book_time
    .map((e) => e.map((v) => timeToMinutes(v.split(":"))))
    .sort((a, b) => a[0] - b[0]);

  sortedArr.forEach(([start, end]) => {
    // 객실이 없다면 객실 추가
    if (room.length === 0) room.push(end + 10);
    else {
      // 객실별 이용 가능 시간이 담긴 배열 room을 오름차순으로 정렬
      room.sort((a, b) => a - b);
      let flag = false; // 객실의 이용 가능 시간이 변경되었는지 체크

      // 기존에 있는 객실을 사용할 수 있는 경우
      for (let i = 0; i < room.length; i++) {
        if (room[i] <= start) {
          room[i] = end + 10;
          flag = true;
          break;
        }
      }
      // 기존에 있는 객실을 사용하지 않은 경우 객실 추가
      if (!flag) room.push(end + 10);
    }
  });

  return room.length;
}
