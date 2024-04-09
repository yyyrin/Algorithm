function solution(dartResult) {
  let numArr = [];
  let nowNum = 0; // 현재 점수

  for (let nowVal of dartResult) {
    // 1) 점수인 경우
    if (Number.isInteger(Number(nowVal))) {
      // 점수가 10인 경우
      if (nowNum === 1 && Number(nowVal) === 0) {
        nowNum = 10;
        continue;
      }
      // 첫 번째 점수가 아닌 경우, 이전에 계산된 점수를 배열에 push
      if (nowNum) numArr.push(nowNum);
      nowNum = Number(nowVal);
    }

    // 2) 보너스인 경우
    else if (nowVal === "S") continue;
    else if (nowVal === "D") nowNum = nowNum * nowNum;
    else if (nowVal === "T") nowNum = nowNum * nowNum * nowNum;
    
    // 3) 옵션인 경우
    else if (nowVal === "*") {
      nowNum *= 2;
      if (numArr.length)
        numArr[numArr.length - 1] = numArr[numArr.length - 1] * 2;
    } else if (nowVal === "#") nowNum *= -1;
  }

  // 마지막에 계산된 값을 배열에 push
  numArr.push(nowNum);

  return numArr.reduce((acc, cur) => acc + cur);
}
