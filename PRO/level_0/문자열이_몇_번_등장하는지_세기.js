function solution(myString, pat) {
  let result = 0;
  let startIdx = 0;

  while (startIdx <= myString.length - pat.length) {
    const newStartIdx = myString.slice(startIdx).indexOf(pat);
    if (newStartIdx === -1) return result;
    result++;
    startIdx += newStartIdx + 1;
  }

  return result;
}
