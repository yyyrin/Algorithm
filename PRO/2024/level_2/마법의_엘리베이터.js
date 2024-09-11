function solution(storey) {
  let result = 0;

  while (storey > 0) {
    const nowNum = storey % 10; // 현재 자릿수
    const nextNum = Math.floor(storey / 10) % 10; // 다음 자릿수

    if (nowNum > 5) {
      result += 10 - nowNum;
      storey = Math.floor(storey / 10) + 1;
    } else if (nowNum === 5) {
      result += nowNum;
      storey =
        nextNum >= 5 ? Math.floor(storey / 10) + 1 : Math.floor(storey / 10);
    } else {
      result += nowNum;
      storey = Math.floor(storey / 10);
    }
  }

  return result;
}
