function solution(array) {
  let arr = new Array(1000).fill(0); // 0으로 배열 채우기
  // 해당하는 index 값에 count + 1 해주기
  for (let i = 0; i < array.length; i++) {
    arr[array[i]] += 1;
  }
  let ans = arr.indexOf(Math.max(...arr)); // 최빈값
  // 최빈값 여러 개라면 -1 return
  return arr.slice(ans + 1).includes(Math.max(...arr)) ? -1 : ans;
}
