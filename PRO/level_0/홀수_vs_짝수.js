function solution(num_list) {
  let oddSum = 0;
  let evenSum = 0;
  
  num_list.forEach((val, idx) =>
    idx % 2 ? (oddSum += val) : (evenSum += val)
  );

  return Math.max(oddSum, evenSum);
}
