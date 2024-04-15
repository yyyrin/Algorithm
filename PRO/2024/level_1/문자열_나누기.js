function solution(s) {
  let standard = [];
  let diff = [];
  let result = 0;

  s.split("").forEach((e) => {
    // 기준값이 정해졌고, 기준값과 다른 경우
    if (standard.length > 0 && standard[0] !== e) diff.push(e);
    // 기준값이 정해지지 않았거나, 기준값과 같은 경우
    else {
      standard.push(e);
    }

    // 두 배열의 길이가 같은 경우 문자열 분리
    if (standard.length === diff.length) {
      result++;
      standard = [];
      diff = [];
    }
  });

  return standard.length > 0 ? result + 1 : result;
}
