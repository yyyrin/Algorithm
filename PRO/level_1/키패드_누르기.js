function solution(numbers, hand) {
  let res = "";
  let nowLeft = 10;
  let nowRight = 12;

  // 손가락 움직임 함수
  function moveFinger(number, direction) {
    res += direction;
    direction === "L" ? (nowLeft = number) : (nowRight = number);
  }

  numbers.forEach((number) => {
    // 1, 4, 7
    if (number % 3 === 1) moveFinger(number, "L");
    // 3, 6, 9
    else if (number && number % 3 === 0) moveFinger(number, "R");
    // 2, 5, 8, 0
    else {
      if (number === 0) number = 11;

      // 현재 손가락 위치와 눌러야 하는 버튼 거리 구하기
      let leftDiff = Math.abs(number - nowLeft);
      let rightDiff = Math.abs(number - nowRight);

      // 한 쪽 손가락이 2, 5, 8, 0에 있는 경우 고려
      leftDiff = (leftDiff % 3) + Math.floor(leftDiff / 3);
      rightDiff = (rightDiff % 3) + Math.floor(rightDiff / 3);

      // 두 엄지손가락 중 눌러야 하는 버튼과의 거리가 더 가까운 엄지손가락 사용
      if (leftDiff < rightDiff) moveFinger(number, "L");
      else if (leftDiff > rightDiff) moveFinger(number, "R");
      // 두 엄지손가락의 거리가 같은 경우
      else {
        hand === "left" ? moveFinger(number, "L") : moveFinger(number, "R");
      }
    }
  });

  return res;
}
