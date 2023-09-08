function solution(msg) {
  // 사전 정의
  let idx_arr = [
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
  let result = []; // 색인번호 담는 배열
  let before = "";

  for (let i = 0; i < msg.length; i++) {
    before += msg[i];

    // 사전에 before이 등록되지 않은 경우
    if (!idx_arr.includes(before)) {
      // 현재 추가된 문자열 이전까지의 문자열을 사전에서 찾은 후
      // 해당하는 인덱스를 result에 추가
      result.push(idx_arr.indexOf(before.slice(0, -1)));
      // 사전에 현재 추가된 문자열까지의 문자열 등록
      idx_arr.push(before);
      // 현재 추가된 문자열로 before 갱신
      before = msg[i];
    }
  }

  // 회문이 끝나도 before가 남아있다면
  // 사전에 등록된 경우이므로 사전에서 찾아서 result에 추가하기
  if (before) result.push(idx_arr.indexOf(before));

  return result;
}
