// 시간초과 발생하는 코드 (1)
function solution(order) {
  let result = 0;
  let mainBelt = [];
  let subBelt = [];
  for (let i = 1; i <= order.length; i++) mainBelt.push(i);

  while (order.length > 0) {
    const nowOrder = order.shift(); // 현재 원하는 순서

    // 보조 컨테이너 벨트의 맨 뒤의 번호가 해당하는 경우
    if (subBelt[subBelt.length - 1] === nowOrder) {
      subBelt.pop();
      result++;
    }
    // 메인 컨테이너 벨트에 해당하는 값이 있다면
    else if (mainBelt.includes(nowOrder)) {
      // 메인 컨테이너 벨트의 맨 앞 값 전까지 값을 서브 벨트에 push
      while (mainBelt[0] !== nowOrder) {
        subBelt.push(mainBelt.shift());
      }
      mainBelt.shift(); // 메인 벨트에서 해당하는 값 없애기
      result++;
    } else break;
  }
  return result;
}

// 시간초과 발생하는 코드 (2)
function solution(order) {
  let result = 0;
  let mainBeltValue = 1; // 기존에 배열로 처리했던 매인 벨트 값을 값으로 처리
  let subBelt = [];

  while (order.length > 0) {
    const nowOrder = order.shift(); // 현재 원하는 순서

    // 보조 컨테이너 벨트의 맨 뒤의 번호가 해당하는 경우
    if (subBelt && subBelt[subBelt.length - 1] === nowOrder) {
      subBelt.pop();
      result++;
    }
    // 원하는 순서가 메인벤트 값 이상인 경우
    else if (nowOrder >= mainBeltValue) {
      while (mainBeltValue !== nowOrder) {
        subBelt.push(mainBeltValue);
        mainBeltValue++;
      }
      mainBeltValue++;
      result++;
    } else break;
  }
  return result;
}

// 시간초과 발생하지 않은 코드
function solution(order) {
  let result = 0;
  const stack = [];

  for (let i = 1; i <= order.length; i++) {
    stack.push(i);

    // 스택의 상자 번호가 주어진 순서와 일치하는지 확인
    while (stack.length > 0 && stack.at(-1) === order[result]) {
      stack.pop(); // 해당하는 상자번호를 스택에서 제거
      result++;
    }
  }

  return result;
}
