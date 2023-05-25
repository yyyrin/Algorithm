// list : 선택 배열
// result : 결과값이 저장되는 배열
// items : 선택한 요소를 담는 배열
// k : 선택하는 개수. nCk 에서 k를 의미
// idx : list 인덱스 정보

function combination(items, idx, k, list, result) {
  if (items.length === k) {
    result.push(items);
    return;
  }
  for (let i = idx; i < list.length; i++) {
    combination([...items, list[i]], i + 1, k, list, result);
  }
}

function solution(number) {
  let result = [];
  let cnt = 0;
  combination([], 0, 3, number, result);
  for (let i = 0; i < result.length; i++) {
    console.log(result[i]);
    if (
      result[i].reduce((sum, currValue) => {
        return sum + currValue;
      }, 0) === 0
    ) {
      cnt += 1;
    }
  }
  return cnt;
}
