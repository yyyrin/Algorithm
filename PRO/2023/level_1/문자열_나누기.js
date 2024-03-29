function solution(s) {
  let standard = [];
  let diff = [];
  let result = 0;

  for (let i = 0; i < s.length; i++) {
    // 기준 찾기
    if (standard.length < 1) {
      standard.push(s[i]);
      continue;
    }

    // 길이 다른 경우
    if (standard.length !== diff.length) {
      if (standard[0] !== s[i]) diff.push(s[i]);
      else standard.push(s[i]);
    }

    // 길이 같은지 check
    if (standard.length === diff.length) {
      result++;
      standard = [];
      diff = [];
    }
  }

  // standard 배열에 값이 남아있다면 result에 1 추가하기
  return standard.length > 0 ? result + 1 : result;
}
