function solution(absolutes, signs) {
  let ans = 0;
  for (i =0; i<absolutes.length; i++) {
      if (signs[i] === true) {
          ans = ans + absolutes[i]
      } else {
          ans = ans - absolutes[i]
      }
  }
  return ans;
}