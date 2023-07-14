function solution(n, a, b) {
  let a_num = a;
  let b_num = b;
  let cnt = 0;

  while (a_num !== b_num) {
    cnt += 1;
    a_num = a_num % 2 === 0 ? a_num / 2 : (a_num + 1) / 2;
    b_num = b_num % 2 === 0 ? b_num / 2 : (b_num + 1) / 2;
  }

  return cnt;
}
