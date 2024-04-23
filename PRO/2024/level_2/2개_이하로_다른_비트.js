// 시간초과 발생한 코드
function solution(numbers) {
  return numbers.map((num) => {
    let bitNum = num.toString(2); // 현재 숫자를 2진수로 변환
    let nextNum = num + 1; // 현재 숫자보다 큰 수

    while (true) {
      const BitNextNum = nextNum.toString(2); // 2진수로 변환
      // 현재 숫자와 큰 수를 2진수로 변환했을 때 길이가 다르다면
      if (bitNum.length !== BitNextNum.length)
        // 현재 숫자의 앞에 "0"을 채워 길이 맞추기
        bitNum = bitNum.padStart(BitNextNum.length, "0");

      // 다른 비트의 개수 구하기
      const count = bitNum
        .split("")
        .filter((e, i) => e !== BitNextNum[i]).length;

      // 다른 비트의 개수가 2 이하인 경우 해당하는 수 return
      if (count <= 2) return +parseInt(BitNextNum, 2);
      else nextNum++;
    }
  });
}

// 통과한 코드
function solution(numbers) {
  return numbers.map((num) => {
    // 짝수인 경우 -> 2진수로 바꿨을 때 맨 뒤의 0만 1로 바꾸면 됨
    if (num % 2 === 0) return num + 1;

    // 홀수인 경우 -> 2진수로 바꿨을 때 맨 뒤에서부터 0을 찾고, 해당 0과 바로 뒤의 1의 위치 바꾸면 됨
    let bitNum = num.toString(2);
    // 2진수로 바꿨을 때 모든 자릿수가 1로 구성된 경우
    const zeroIdx = bitNum.lastIndexOf("0");
    if (zeroIdx === -1)
      return parseInt("10" + "1".repeat(bitNum.length - 1), 2);
    return parseInt(
      bitNum.slice(0, zeroIdx) + "10" + bitNum.slice(zeroIdx + 2),
      2
    );
  });
}
