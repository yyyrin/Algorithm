// 효율성을 높인 코드 //
function solution(bridge_length, weight, truck_weights) {
  let time = 0; // 경과시간

  // 다리 위에 올라간 트럭 배열
  let bridge = new Array(bridge_length).fill(0); 
  // 현재 시점 다리 위 트럭 무게
  let bridge_sum = 0;

  // 맨 처음 올라가는 트럭 처리
  ++time;
  bridge.shift();
  bridge_sum += truck_weights[0];
  bridge.push(truck_weights.shift());

  // 다리에 트럭이 있는 동안
  while (bridge_sum > 0) {
    ++time;

    // 맨 앞 값 빼기
    bridge_sum -= bridge.shift();

    // 현재 시점 다리에 트럭을 추가해도 된다면
    if (truck_weights.length > 0 && bridge_sum + truck_weights[0] <= weight) {
      bridge_sum += truck_weights[0];
      bridge.push(truck_weights.shift());
    } else {
      bridge.push(0);
    }
  }
  return time;
}


// 처음 통과한 코드(메모리 많이 씀) //
function solution(bridge_length, weight, truck_weights) {
  let time = 0; // 경과시간
  let passed = 0; // 다리 지난 트럭 개수
  let passing = []; // 다리 건너는 중인 트럭
  const trucks = truck_weights.length; // 트럭 개수

  // 모든 트럭이 다리를 지날 때까지
  while (passed !== trucks) {
    // 다리를 건너고 있는 트럭의 개수가 다리에 올라갈 수 있는 트력 개수와 같다면
    if (passing.length === bridge_length) {
      if (passing[0] !== 0) ++passed; // 0이 아닌 경우만 passed count하기
      passing.shift(); // 맨 앞에 값 없애기
    }

    ++time;

    if (
      passing.filter((e) => e > 0).length <= bridge_length &&
      passing.reduce((acc, cur) => acc + cur, 0) + truck_weights[0] <= weight
    ) {
      passing.push(truck_weights[0]);
      truck_weights.shift();
    } else if (passing.length !== bridge_length) {
      passing.push(0);
    } else {
      passing.shift();
    }
  }
  return time;
}
