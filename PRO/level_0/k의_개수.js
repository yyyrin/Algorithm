function solution(i, j, k) {
  let cnt = 0;
  let text = i.toString();
  for (let n = i + 1; n <= j; n++) {
    text += n.toString();
  }
  return text.split(k.toString()).length - 1;
}
