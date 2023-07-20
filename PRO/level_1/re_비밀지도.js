function solution(n, arr1, arr2) {
  let ans = [];

  for (let i = 0; i < n; i++) {
    // 비트 연산자 이용
    let bin = (arr1[i] | arr2[i]).toString(2);

    let line = [];
    // j가 -1일 경우 undefined 반환
    for (let j = bin.length - n; j < bin.length; j++) {
      if (bin[j] === "1") line.push("#");
      else line.push(" ");
    }
    ans.push(line.join(""));
  }
  return ans;
}
