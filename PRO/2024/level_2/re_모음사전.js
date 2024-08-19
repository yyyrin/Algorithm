function culculate(index) {
  let sum = 0;
  for (let i = index; i >= 0; i--) {
    sum += 5 ** i;
  }
  return sum;
}

function solution(word) {
  const alphabet = { A: 0, E: 1, I: 2, O: 3, U: 4 };
  let result = 0;

  word.split("").forEach((e, index) => {
    const val = alphabet[e];
    result += val * culculate(4 - index) + 1;
  });

  return result;
}
