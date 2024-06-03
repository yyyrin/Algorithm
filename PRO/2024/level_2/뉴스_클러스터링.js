// 소문자인지 확인하는 함수
function check(num) {
  if (num >= 97 && num <= 122) return true;
  return false;
}

function solution(str1, str2) {
  // 소문자로 변환
  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();

  // st1을 두 글자씩 끊어서 다중집합 원소 저장할 배열
  const str1Arr = [];

  for (let i = 0; i < str1.length - 1; i++) {
    // 두 글자가 소문자인 경우, 다중집합 만들기
    if (check(str1[i].charCodeAt()) && check(str1[i + 1].charCodeAt()))
      str1Arr.push(str1[i] + str1[i + 1]);
  }

  let intersection = 0; // 교집합 크기
  let union = str1Arr.length; // 합집합 크기

  for (let i = 0; i < str2.length - 1; i++) {
    // 두 글자가 소문자인 경우
    if (check(str2[i].charCodeAt()) && check(str2[i + 1].charCodeAt())) {
      // 다중집합 원소 만들기
      const word = str2[i] + str2[i + 1];

      // str1에 동일한 원소가 있는 경우
      if (str1Arr.includes(word)) {
        intersection++;
        str1Arr.splice(str1Arr.indexOf(word), 1);
      }
      // str1에 없는 원소인 경우
      else union++;
    }
  }

  // 자카드 유사도 반환
  return !union ? 65536 : Math.floor((intersection / union) * 65536);
}
