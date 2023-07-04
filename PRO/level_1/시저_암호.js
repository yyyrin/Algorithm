function solution(s, n) {
  let res = "";
  s.split("").forEach((e) => {
    // 아스키코드로 변경
    let ascii = e.charCodeAt();
    // 대문자인 경우
    if (ascii >= 65 && ascii <= 90) {
      ascii = ascii + n > 90 ? ascii + n - 26 : ascii + n;
    }
    // 소문자인 경우
    if (ascii >= 97) {
      ascii = ascii + n > 122 ? ascii + n - 26 : ascii + n;
    }
    // 아스키코드를 문자로 변경하여 res에 붙이기
    res += String.fromCharCode(ascii);
  });
  return res;
}
