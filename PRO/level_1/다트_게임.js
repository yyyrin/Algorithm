function solution(dartResult) {
  let num = []; // 숫자만 뽑아서 관리할 array
  let idx = -1; // num에서 해당하는 숫자의 idx

  for (let i = 0; i < dartResult.length; i++) {
    // 숫자 판별
    if (!isNaN(dartResult[i])) {
      idx += 1;
      // 10 판별
      if (dartResult.slice(i, i + 2) === "10") {
        num.push(10);
        i++;
      } else num.push(Number(dartResult[i]));
    }

    // 보너스 처리
    if (dartResult[i] === "D") num[idx] = num[idx] ** 2;
    if (dartResult[i] === "T") num[idx] = num[idx] ** 3;

    // 스타상 처리
    if (dartResult[i] === "*") {
      num[idx] *= 2;
      if (num[idx - 1]) num[idx - 1] *= 2;
    }
    // 아차상 처리
    if (dartResult[i] === "#") {
      num[idx] *= -1;
    }
  }

  return num.reduce((acc, cur) => acc + cur);
}
