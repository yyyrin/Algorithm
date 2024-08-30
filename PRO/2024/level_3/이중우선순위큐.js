function solution(operations) {
  let queue = [];

  operations.forEach((e) => {
    const [command, num] = e.split(" ");
    // 명령어가 I인 경우, 큐에 주어진 숫자 삽입
    if (command === "I") queue.push(Number(num));
    // 명령어가 D이고, 큐가 비어있지 않다면
    if (command === "D" && queue.length) {
      // 큐에서 최솟값 삭제
      if (num === "-1") {
        queue.splice(queue.indexOf(Math.min(...queue)), 1);
      }
      // 큐에서 최댓값 삭제
      else {
        queue.splice(queue.indexOf(Math.max(...queue)), 1);
      }
    }
  });

  // 큐가 비어있지 않다면 [최댓값, 최솟값] return
  if (queue.length) {
    return [Math.max(...queue), Math.min(...queue)];
  } else return [0, 0];
}
