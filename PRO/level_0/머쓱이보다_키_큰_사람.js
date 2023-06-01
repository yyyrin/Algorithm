function solution(array, height) {
  let cnt = 0;
  for (i = 0; i < array.length; i++) {
    if (array[i] > height) {
      cnt += 1;
    }
  }
  return cnt;
}
