// [BOJ] 18258. 큐 2

const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

input.shift();
let queue = [];
let front = 0;
let back = 0;
let result = [];

input.forEach((e) => {
  const command = e.split(" ").map((word) => word.trim());

  if (command[0] === "push") {
    queue[back] = Number(command[1]);
    back++;
  } else if (command[0] === "pop") {
    if (front < back) {
      result.push(queue[front]);
      front++;
    } else {
      result.push(-1);
    }
  } else if (command[0] === "size") {
    result.push(back - front);
  } else if (command[0] === "empty") {
    result.push(front === back ? 1 : 0);
  } else if (command[0] === "front") {
    result.push(front < back ? queue[front] : -1);
  } else if (command[0] === "back") {
    result.push(front < back ? queue[back - 1] : -1);
  }
});

console.log(result.join("\n"));



// 메모리 초과 코드 //
// const fs = require("fs");
// let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

// input.shift();
// let queue = [];
// let result = [];

// input.forEach((e) => {
//   const command = e.split(" ").map((word) => word.trim());

//   if (command[0] === "push") queue.push(Number(command[1]));
//   // shift()를 사용했더니 시간 초과가 발생해서 splice()로 수정
//   // splice() 또한 모든 요소를 새로운 배열로 복사하므로 비효율적
//   else if (command[0] === "pop") {
//     result.push(queue[0] || -1);
//     queue = queue.splice(1);
//   } else if (command[0] === "size") result.push(queue.length);
//   else if (command[0] === "empty") result.push(queue.length > 0 ? 0 : 1);
//   else if (command[0] === "front") result.push(queue[0] || -1);
//   else if (command[0] === "back") result.push(queue[queue.length - 1] || -1);
// });

// console.log(result.join("\n"));
