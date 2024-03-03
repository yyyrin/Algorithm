// 기존 코드 -> 컴퓨터적으로 계산하지 않고 사람으로서 사고방식으로 코드 작성.. 효율적이지 않음
function solution(today, terms, privacies) {
  const [tYear, tMonth, tDay] = today.split(".").map((e) => +e); // 오늘 날짜
  const termsObj = {};
  let ans = [];

  // 약관의 유효기간을 담은 배열 -> 객체로 만들기
  terms.forEach((term) => {
    const splittedTerm = term.split(" ");
    termsObj[splittedTerm[0]] = +splittedTerm[1];
  });

  privacies.forEach((privacy, idx) => {
    let [date, term] = privacy.split(" "); // 개인정보 수집 일자와 약관 종류
    let [year, month, day] = date.split(".").map((e) => +e);
    let check = termsObj[term] + month; // 개인정보 수집 일자에 유효기간 계산

    // 년도 계산
    if (check > 12)
      year += check % 12 ? parseInt(check / 12) : parseInt(check / 12) - 1;

    // 월 계산
    month = check % 12 || 12;

    // 유효기간 지났는지 여부 체크
    if (
      year < tYear ||
      (year === tYear && month < tMonth) ||
      (year === tYear && month === tMonth && day - 1 < tDay)
    )
      ans.push(idx + 1);
  });

  return ans;
}

// 개선 코드 -> 년월일을 일로 계산하여 처리
/* 
function solution(today, terms, privacies) {
  let answer = [];
  const [year, month, date] = today.split(".").map(Number);
  const todates = year * 12 * 28 + month * 28 + date;
  const termsObj = {};

  terms.forEach((e) => {
    let [a, b] = e.split(" ");
    termsObj[a] = Number(b);
  });

  privacies.forEach((e, i) => {
    let [day, term] = e.split(" ");
    day = day.split(".").map(Number);
    const dates = day[0] * 12 * 28 + day[1] * 28 + day[2] + termsObj[term] * 28;
    if (dates <= todates) answer.push(i + 1);
  });

  return answer;
}
*/
