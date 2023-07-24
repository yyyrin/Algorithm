// 통과한 코드
function solution(k, tangerine) {
  let res = 0; // 서로 다른 종류의 수
  let size_obj = {}; // 크기: 개수

  // size_obj에 크기 없다면 객체에 추가, 있다면 개수 += 1
  tangerine.map((e) => {
    if (!(e in size_obj)) size_obj[e] = 1;
    else size_obj[e] += 1;
  });

  // size_obj의 value만 배열로 만들어서 오름차순 정렬
  size_arr = Object.values(size_obj).sort((a, b) => b - a);

  // 한 상자에 담으려는 귤의 개수가 0 이하가 될 때까지 귤 개수 빼주기
  for (let i = 0; i < size_arr.length; i++) {
    k -= size_arr[i];
    res += 1;
    if (k <= 0) break;
  }

  return res;
}

// 런타임 에러 발생
function solution(k, tangerine) {
  let res = 0;
  let size_idx = new Array(Math.max(...tangerine) + 1).fill(0);
  tangerine.map((e) => (size_idx[e] += 1));
  while (k > 0) {
    let max_size = Math.max(...size_idx);
    k -= max_size;
    size_idx[size_idx.indexOf(max_size)] = 0;
    res += 1;
  }
  return res;
}
