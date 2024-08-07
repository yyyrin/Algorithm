function solution(bridge_length, weight, truck_weights) {
  let bridge = new Array(bridge_length).fill(0);

  let time = 1; // 경과시간
  let nowWeight = truck_weights[0]; // 현재 다리 위 트럭 수
  bridge.shift();
  bridge.push(truck_weights.shift()); // 다리 위에 첫 번째 트럭 올리기

  while (nowWeight) {
    time++;
    nowWeight -= bridge.shift();

    // 다리에 다음 트럭을 올렸을 때 견딜 수 있는 무게인 경우
    if (nowWeight + truck_weights[0] <= weight) {
      nowWeight += truck_weights[0];
      bridge.push(truck_weights.shift());
    } else {
      bridge.push(0);
    }
  }

  return time;
}
