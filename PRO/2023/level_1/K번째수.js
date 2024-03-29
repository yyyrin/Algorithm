function solution(array, commands) {
  let res = []; // 결과 담을 배열
  commands.map((e) =>
    res.push(array.slice(e[0] - 1, e[1]).sort((a, b) => a - b)[e[2] - 1])
  );
  return res;
}
