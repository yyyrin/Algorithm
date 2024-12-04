// 1차 시도 (통과X, 너무 단순하게 생각함)
function solution(sticker) {
  let evenIdxSum = 0;
  let oddIdxSum = 0;

  // 짝수번째 인덱스 값의 합과 홀수번째 인덱스 값의 합을 구함..
  for (let i = 0; i < sticker.length; i++) {
    i % 2 ? (oddIdxSum += sticker[i]) : (evenIdxSum += sticker[i]);
  }

  if (sticker.length % 2) evenIdxSum -= sticker[sticker.length - 1];

  return Math.max(evenIdxSum, oddIdxSum);
}

// 통과한 코드!
function solution(sticker) {
  const len = sticker.length;
  // dp1: 첫 번째 스티커를 선택하고 마지막 스티커를 제외하는 경우의 최대합 저장
  // dp2: 첫 번째 스티커를 제외하는 경우의 최대합 저장
  const dp1 = new Array(len).fill(0);
  const dp2 = new Array(len).fill(0);

  dp1[0] = sticker[0]; // 첫 번째 스티커를 뜯은 경우
  dp1[1] = sticker[0];
  dp2[1] = sticker[1]; // 첫 번째 스티커를 뜯지 않은 경우

  // dp[i-1]: 현재 스티커를 뜯지 않은 경우
  // dp[i - 2] + sticker[i]: 현재 스티커를 뜯은 경우
  for (let i = 2; i < len; i++) {
    if (i !== len - 1) {
      dp1[i] = Math.max(dp1[i - 1], dp1[i - 2] + sticker[i]);
    }
    // 마지막 스티커를 뜯지 않으므로 마지막 인덱스에서 갱신하지 않음
    else {
      dp1[i] = dp1[i - 1];
    }

    dp2[i] = Math.max(dp2[i - 1], dp2[i - 2] + sticker[i]);
  }

  return Math.max(dp1[len - 1], dp2[len - 1]);
}
