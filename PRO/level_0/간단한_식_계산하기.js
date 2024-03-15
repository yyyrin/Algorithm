function solution(binomial) {
  binomial = binomial.split(" ");
  let result = +binomial[0];

  for (let i = 1; i < binomial.length; i += 2) {
    if (binomial[i] === "+") result += +binomial[i + 1];
    else if (binomial[i] === "-") result -= +binomial[i + 1];
    else if (binomial[i] === "*") result *= +binomial[i + 1];
  }

  return result;
}
