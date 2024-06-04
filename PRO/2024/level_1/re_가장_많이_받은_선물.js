function solution(friends, gifts) {
  let result = 0;
  const cntObj = {};

  // {fromName: {toName: [fromName이 to Name에게 준 횟수, fromName이 toName으로부터 받은 횟수]}}

  // cntObj 초기화
  friends.forEach((fromName) => {
    cntObj[fromName] = {};
    friends.forEach((toName) => {
      // 이름이 같이 않은 경우 [준 개수 = 0, 받은 개수 = 0]로 초기화
      if (fromName !== toName) {
        cntObj[fromName][toName] = [0, 0];
      }
      // 이름이 같은 경우 선물 지수 0으로 초기화
      else cntObj[fromName][toName] = 0;
    });
  });

  // 데이터 파싱
  for (let i = 0; i < gifts.length; i++) {
    const [from, to] = gifts[i].split(" ");
    // 선물 준 사람의 선물 지수 증감
    cntObj[from][from]++;
    // 선물 받은 사람의 선물 지수 감소
    cntObj[to][to]--;
    // 선물 지수 계산
    cntObj[from][to][0]++;
    cntObj[to][from][1]++;
  }

  Object.entries(cntObj).forEach(([fromName, cntDatas], index) => {
    let tempResult = 0; // 임시 정답 데이트

    Object.entries(cntDatas).forEach(([toName, cntData], idx) => {
      // 이름이 다름 경우
      if (fromName !== toName) {
        // fromName이 toName에게 선물 준 횟수, 선물 받은 횟수
        const [from, to] = [...cntData];
        // fromName이 toName에게 더 많은 선물을 준 경우, 다음 달에 선물 +1
        if (from > to) tempResult++;
        // fromName과 toName의 주고 받은 수가 같은 경우
        else if (from === to) {
          // fromName의 선물 지수가 toName의 선물지수 보다 큰 경우, 다음 달에 선물 +1
          if (cntObj[fromName][fromName] > cntObj[toName][toName]) tempResult++;
        }
      }
    });
    // 더 큰 값으로 최종 결과값 갱신
    result = Math.max(result, tempResult);
  });

  return result;
}
