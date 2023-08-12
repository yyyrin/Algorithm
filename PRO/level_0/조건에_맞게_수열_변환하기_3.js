function solution(arr, k) {
  return k % 2 === 0 ? arr.map((e) => e + k) : arr.map((e) => e * k);
}
