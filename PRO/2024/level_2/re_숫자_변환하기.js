// 처음 코드 -> 통과 x
function solution(x, y, n) {
  let result = 0;
  let copyX = x;

  while (copyX < y) {
    result++;
    let array = [copyX * 2, copyX * 3, copyX + n];

    let [compareDivision, index] = [1000000, -1];
    array.forEach((e, i) => {
      if (y % e === 0 && compareDivision > Math.floor(y / e)) {
        compareDivision = Math.floor(y / e);
        index = i;
      }
    });

    if (index === -1) copyX = array[2];
    else copyX = array[index];
  }

  if (copyX === y) return result;
  else return -1;
}

// DP 사용 -> 통과한 코드
function solution(x, y, n) {
  const dp = new Array(y + 1).fill(Infinity);
  dp[x] = 0;

  for (let i = x; i <= y; i++) {
    dp[i + n] = Math.min(dp[i + n], dp[i] + 1);
    dp[i * 2] = Math.min(dp[i * 2], dp[i] + 1);
    dp[i * 3] = Math.min(dp[i * 3], dp[i] + 1);
  }

  return dp[y] !== Infinity ? dp[y] : -1;
}
