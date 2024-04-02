function solution(n, arr1, arr2) {
  // 이진수로 바꾸기
  const map1 = arr1.map((e) => e.toString(2).padStart(n, "0"));
  const map2 = arr2.map((e) => e.toString(2).padStart(n, "0"));

  let result = [];

  for (let i = 0; i < n; i++) {
    let line = "";

    for (let j = 0; j < n; j++) {
      // 지도 1과 지도 2 중 어느 하나라도 벽인 경우
      if (map1[i][j] === "1" || map2[i][j] === "1") line += "#";
      else line += " ";
    }

    result.push(line);
  }

  return result;
}
