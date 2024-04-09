function solution(n, m, section) {
  let endPoint = 0;
  let result = 0;

  section.forEach((e) => {
    if (e > endPoint) {
      endPoint = e + m - 1;
      result++;
    }
  });
  
  return result;
}
