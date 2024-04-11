// 통과한 코드
function solution(phone_book) {
  // 사전식으로 정렬
  phone_book.sort();

  for (let i = 0; i < phone_book.length - 1; i++) {
    // startsWith(): 어떤 문자열이 특정 문자로 시작하는지 확인하여 결과를 true/false로 반환
    if (phone_book[i + 1].startsWith(phone_book[i])) return false;
  }
  return true;
}

// 효율성 테스트에서 실패 -> 이중 for문 사용
function solution(phone_book) {
  phone_book.sort((a, b) => a.length - b.length);

  for (let i = 0; i < phone_book.length - 1; i++) {
    const nowNumber = phone_book[i];
    for (let j = i + 1; j < phone_book.length; j++) {
      if (phone_book[j].slice(0, nowNumber.length) === nowNumber) return false;
    }
  }
  return true;
}
