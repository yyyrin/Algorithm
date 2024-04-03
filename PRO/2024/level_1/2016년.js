function solution(a, b) {
  const arr = ["FRI", "SAT", "SUN", "MON", "TUE", "WED", "THU"];
  const days = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  
  return arr[
    (days.slice(0, a - 1).reduce((acc, cur) => acc + cur, 0) + b - 1) % 7
  ];
}
