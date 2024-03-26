function solution(picture, k) {
  let result = [];

  picture.forEach((line) => {
    const newLine = [...line].map((e) => e.repeat(k)).join("");
    for (let i = 0; i < k; i++) {
      result.push(newLine);
    }
  });

  return result;
}
