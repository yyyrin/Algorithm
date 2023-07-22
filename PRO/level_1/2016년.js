function solution(a, b) {
  const week = ["FRI", "SAT", "SUN", "MON", "TUE", "WED", "THU"]; // 요일
  const days_arr = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]; // 월별 날 수
  let sum_days =
    days_arr.slice(0, a - 1).reduce((acc, cur) => acc + cur, 0) + b - 1;
  return week[sum_days % 7];
}
