function culculate(idx) {
  let sum = 0;
  for (let i = idx; i >= 0; i--) {
    sum += 5 ** i;
  }
  return sum;
}

function solution(word) {
  const alpha = { A: 0, E: 1, I: 2, O: 3, U: 4 };
  let result = 0;

  word.split("").forEach((e, idx) => {
    const val = alpha[e];
    result += val * culculate(4 - idx) + 1;
  });

  return result;
}
