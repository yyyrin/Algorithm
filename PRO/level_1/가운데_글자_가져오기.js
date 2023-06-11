// substr(시작위치, 길이)
// substring(시작위치, 종료위치)
// slice(시작위치, 종료위치)

function solution(s) {
  return s.length % 2 === 0
    ? s.substr(parseInt(s.length / 2) - 1, 2)
    : s.substr(parseInt(s.length / 2), 1);
}
