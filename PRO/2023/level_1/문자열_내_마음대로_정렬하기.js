function solution(strings, n) {
  return strings.sort((a, b) => {
    // n번째 문자를 기준으로 오름차순 정렬
    if (a[n] > b[n]) return 1;
    else if (a[n] < b[n]) return -1;
    // n번째 문자가 같은 경우 사전순으로 정렬
    else return a > b ? 1 : -1;
  });
}
