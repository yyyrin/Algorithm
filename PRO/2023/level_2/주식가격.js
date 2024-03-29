// 정확성은 통과했지만 유효성은 통과 X
function solution(prices) {
  return prices.map((ele, idx) => {
    return (
      prices.slice(idx + 1).findIndex((e) => e < ele) + 1 ||
      prices.length - (idx + 1)
    );
  });
}

// 정확성, 유효성 모두 통과한 코드
function solution(prices) {
  let ans = new Array(prices.length).fill(0);

  for (let i = 0; i < prices.length - 1; i++) {
    ans[i] = 1;
    
    // 다음 주식 가격이 현재 주식 가격 이상이라면
    // 현재 주식보다 가격이 작을 때까지 count하기
    if (prices[i] <= prices[i + 1]) {
      for (let j = i + 1; j < prices.length - 1; j++) {
        if (prices[i] > prices[j]) break;
        else ans[i] += 1;
      }
    }
  }
  
  return ans;
}
