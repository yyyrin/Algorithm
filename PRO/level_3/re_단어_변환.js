// 두 단어가 한 개의 알파벳만 다른지 체크하는 함수
function isConnect(word1, word2) {
  const len = word1.length;
  let cnt = 0; // 다른 알파벳 개수

  for (let i = 0; i < len; i++) {
    if (word1[i] !== word2[i]) cnt++;
  }

  return cnt === 1 ? true : false;
}

function solution(begin, target, words) {
  // 단어별 거친 과정 개수 저장
  // begin 그대로 넣으면 begin이 key로 설정됨
  let visited = { [begin]: 0 };
  let queue = [begin];

  // bfs
  while (queue.length > 0) {
    let currentWord = queue.shift();

    if (currentWord === target) break; // 목적지 도착 여부 체크

    for (let word of words) {
      // 알파벳이 하나만 다르고, 아직 체크하지 않은 단어라면
      if (isConnect(currentWord, word) && !visited[word]) {
        queue.push(word);
        visited[word] = visited[currentWord] + 1; // 과정 수 증가시키기
      }
    }
  }

  return visited[target] ? visited[target] : 0;
}
