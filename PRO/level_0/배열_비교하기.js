function solution(arr1, arr2) {
  if (arr1.length > arr2.length) return 1;
  else if (arr1.length < arr2.length) return -1;
  else {
    let a_len = arr1.reduce((a, c) => a + c, 0);
    let b_len = arr2.reduce((a, c) => a + c, 0);
    if (a_len > b_len) return 1;
    else if (a_len < b_len) return -1;
    else return 0;
  }
}
