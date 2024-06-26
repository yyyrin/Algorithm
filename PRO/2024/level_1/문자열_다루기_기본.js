function solution(s) {
  // 자바스크립트에서는 숫자에 e가 붙으면 지수로 인식하여 문자인 경우도 그냥 숫자로 인식
  return (s.length === 4 || s.length === 6) && [...s].every((e) => !isNaN(e))
    ? true
    : false;
}
