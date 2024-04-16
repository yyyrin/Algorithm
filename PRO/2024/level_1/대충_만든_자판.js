function solution(keymap, targets) {
  // 문자별 최소로 누르는 횟수를 객체로 저장
  const keyObj = {};

  keymap.forEach((key) =>
    key
      .split("")
      .forEach(
        (e, i) => (keyObj[e] = keyObj[e] ? Math.min(keyObj[e], i + 1) : i + 1)
      )
  );

  return targets.map((word) => {
    let cnt = 0; // 입력하려는 문자열의 누르는 횟수

    for (let e of word) {
      if (keyObj[e]) cnt += keyObj[e];
      else return -1; // 목표 문자열을 작성할 수 없는 경우
    }
    
    return cnt;
  });
}
