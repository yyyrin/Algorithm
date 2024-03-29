function solution(num) {
  if (num === 1) return 0;

  let cnt = 0;
  while (num !== 1) {
    if (cnt === 500) return -1;
    
    cnt++;
    num = num % 2 ? num * 3 + 1 : num / 2;
  }

  return cnt;
}
