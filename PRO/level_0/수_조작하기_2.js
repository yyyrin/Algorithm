function solution(numLog) {
  let result = "";

  for (let i = 1; i < numLog.length; i++) {
    if (numLog[i] - numLog[i - 1] === 1) result += "w";
    else if (numLog[i] + 1 === numLog[i - 1]) result += "s";
    else if (numLog[i] - numLog[i - 1] === 10) result += "d";
    else if (numLog[i] + 10 === numLog[i - 1]) result += "a";
  }

  return result;
}
