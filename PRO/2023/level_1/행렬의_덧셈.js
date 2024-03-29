function solution(arr1, arr2) {
  let ans_arr = arr1;
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr1[0].length; j++) {
      ans_arr[i][j] = arr1[i][j] + arr2[i][j];
    }
  }
  return ans_arr;
}

// map을 사용하면 더 간결하게 작성할 수 있는데..!!!