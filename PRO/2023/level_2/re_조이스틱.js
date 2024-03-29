function solution(name) {
  let answer = 0;
  let min_move = name.length - 1;

  name.split("").map((e, i) => {
    answer += Math.min(e.charCodeAt() - 65, 91 - e.charCodeAt());
    let idx = i + 1;

    // 연속되는 A의 개수 세기
    while (idx < name.length && name[idx] === "A") {
      idx++;
    }

    min_move = Math.min(
      min_move,
      i * 2 + name.length - idx, // 뒤로 돌아 가는 것
      i + 2 * (name.length - idx) // 뒷 부분을 먼저 입력하는 것
    );
  });

  return answer + min_move;
}
