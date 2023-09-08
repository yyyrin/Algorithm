function solution(s) {
  let obj = {}; // 원소: 빈도 수
  let result = [];

  // 원소별 빈도수 계산
  s.replaceAll("{", "")
    .replaceAll("}", "")
    .split(",")
    .map((e) => {
      if (!obj[e]) obj[e] = 1;
      else obj[e]++;
    });

  // 빈도수 오름차순으로 정렬하여 원소만 result 배열에 넣기
  Object.entries(obj)
    .sort((a, b) => b[1] - a[1])
    .map((e) => result.push(Number(e[0])));

  return result;
}
