function solution(num_list) {
  return num_list.reduce((acc, cur) => {
    let cnt = 0;

    while (cur !== 1) {
      cnt++;
      cur = cur % 2 ? (cur - 1) / 2 : cur / 2;
    }
    
    return acc + cnt;
  }, 0);
}
