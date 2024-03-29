function solution(arr1, arr2) {
  let multi_arr = [];

  // arr1.length * arr2[0].length 크기만큼 0으로 채우기
  for (let i = 0; i < arr1.length; i++) {
    multi_arr[i] = new Array(arr2[0].length).fill(0);
  }

  // 행렬 계산
  for (let i = 0; i < multi_arr.length; i++) {
    for (let j = 0; j < multi_arr[0].length; j++) {
      multi_arr[i][j] = arr1[i].reduce(
        (acc, cur, idx) => (acc += cur * arr2[idx][j]),
        0
      );
    }
  }

  return multi_arr;
}
