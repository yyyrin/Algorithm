function solution(a, d, included) {
  let result = 0;
  let sequence = 0;
  
  included.forEach((e, idx) => {
    idx > 0 ? (sequence += d) : (sequence += a);
    if (e) result += sequence;
  });

  return result;
}
