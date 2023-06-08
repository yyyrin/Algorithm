function solution(numbers, direction) {
  // 내 풀이
  let arr = [];
  if (direction === "right") {
    arr.push(numbers[numbers.length - 1]);
    arr.push(...numbers.slice(0, numbers.length - 1));
  } else {
    arr.push(...numbers.slice(1, numbers.length));
    arr.push(numbers[0]);
  }
  return arr;

  // 다른 풀이
  // shift() // 배열 맨 앞의 값 삭제
  // unshift(값) // 배열 맨 앞의 값 추가
  // direction === "right"
  //   ? numbers.unshift(numbers.pop())
  //   : numbers.push(numbers.shift());
  // return numbers;
}
