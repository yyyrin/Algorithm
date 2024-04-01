// 내 풀이
function solution(strings, n) {
  return strings.sort().sort((a, b) => a.charCodeAt(n) - b.charCodeAt(n));
}

// 다른 풀이
// localeCompare(): 참조 문자열이 정렬 순으로 지정된 문자열 앞 혹은 뒤에 오는지 또는 동일한 문자열인지 나타내는 수치를 반환
function solution(strings, n) {
  return strings.sort((s1, s2) =>
    s1[n] === s2[n] ? s1.localeCompare(s2) : s1[n].localeCompare(s2[n])
  );
}
