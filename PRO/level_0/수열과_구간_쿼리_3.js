// 구조 분해 할당 이용
function solution(arr, queries) {
  queries.forEach(([i, j]) => {
    [arr[i], arr[j]] = [arr[j], arr[i]];
  });

  return arr;
}

/*
function solution(arr, queries) {
  let result = arr;

  queries.forEach(([i, j]) => {
    let newArr = result.slice(0, i);
    newArr.push(result[j]);
    newArr.push(...result.slice(i + 1, j));
    newArr.push(result[i]);
    newArr.push(...result.slice(j + 1));
    result = newArr;
  });

  return result;
}
*/