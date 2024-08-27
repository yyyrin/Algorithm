function solution(topping) {
  let result = 0; // 롤케이크를 공평하게 자르는 방법의 수
  const baseSet = new Set(); // 동생이 맛볼 수 있는 토핑 종류
  const compareSet = new Set(); // 철수가 맛볼 수 있는 토핑 종류
  let check = new Array(10001).fill(0); // 토핑 종류별 개수

  // 토핑 개수가 2개 미만이라면 공평하게 자를 수 없음
  if (topping.length < 2) return 0;

  topping.map((e) => {
    baseSet.add(e); // 동생이 맛볼 수 있는 토핑 종류 추가
    check[e]++; // 토핑 종류별 개수 추가
  });

  topping.map((e) => {
    // 동생이 맛볼 수 있는 토핑에서 철수가 맛볼 수 있는 토핑 빼기
    if (check[e] > 0) check[e]--;
    if (check[e] === 0) baseSet.delete(e);

    compareSet.add(e); // 철수가 맛볼 수 있는 토핑 종류 추가
    // 철수와 동생이 맛볼 수 있는 토핑 종류 개수가 동일한 경우, 공평하게 자른 경우에 해당함
    if (baseSet.size === compareSet.size) result++;
  });

  return result++;
}
