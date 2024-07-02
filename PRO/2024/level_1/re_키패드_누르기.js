function solution(numbers, hand) {
  let left = 10;
  let right = 12;
  let result = "";

  function moveFinger(number, direction) {
    result += direction;
    direction === "L" ? (left = number) : (right = number);
  }

  for (let i = 0; i < numbers.length; i++) {
    let number = numbers[i];
    // 1, 4, 7
    if (number % 3 === 1) moveFinger(number, "L");
    // 3, 6, 9
    else if (number && number % 3 === 0) moveFinger(number, "R");
    // 2, 5, 8, 0
    else {
      if (number === 0) number = 11;

      let leftDis = Math.abs(number - left);
      let rightDis = Math.abs(number - right);

      leftDis = (leftDis % 3) + Math.floor(leftDis / 3);
      rightDis = (rightDis % 3) + Math.floor(rightDis / 3);

      if (leftDis < rightDis) moveFinger(number, "L");
      else if (leftDis > rightDis) moveFinger(number, "R");
      else hand === "left" ? moveFinger(number, "L") : moveFinger(number, "R");
    }
  }

  return result;
}
