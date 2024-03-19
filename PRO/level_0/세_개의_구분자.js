// 정규표현식 대신 replaceAll을 사용한 풀이
function solution(myStr) {
  const result = myStr
    .replaceAll("a", " ")
    .replaceAll("b", " ")
    .replaceAll("c", " ")
    .split(" ")
    .filter((e) => e.length);

  return result.length ? result : ["EMPTY"];
}

// 정규 표현식을 이용한 풀이
function solution(myStr) {
  const result = myStr.split(/[a|b|c]/).filter((e) => e.length);

  return result.length ? result : ["EMPTY"];
}
