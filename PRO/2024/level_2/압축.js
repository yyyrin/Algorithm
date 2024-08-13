function solution(msg) {
  const arr = [
    "_",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  const result = []; // 결과 저장한 배열
  let prevWord = ""; // 이전까지 만들어진 글자
  let newWord = ""; // 새로 만들어진 글자

  for (let i = 0; i < msg.length; i++) {
    newWord += msg[i];

    // 사전에 새로 만들어진 글자가 있는 경우
    if (arr.indexOf(newWord) > 0) {
      prevWord += msg[i];
    } else {
      // 사전에 새로 만들어진 글자가 없는 경우
      result.push(arr.indexOf(prevWord)); // 새로 만들어진 글자와 일치하는 색인 번호 출력
      arr.push(newWord); // 새로 만들어진 글자를 사전에 등록
      newWord = msg[i];
      prevWord = msg[i];
    }
  }
  // 마지막 글자 처리
  result.push(arr.indexOf(prevWord));

  return result;
}
