function solution(str1, str2) {
  return [...str1].reduce((acc, cur, idx) => {
    return (acc += cur + str2[idx]);
  }, "");
}
