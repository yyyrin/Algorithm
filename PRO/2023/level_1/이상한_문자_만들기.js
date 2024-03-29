function solution(s) {
  let arr = s
    .toLowerCase()
    .split(" ")
    .map((e) => e.split(""));
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (j % 2 === 0) arr[i][j] = arr[i][j].toUpperCase();
    }
    arr[i] = arr[i].join("");
  }
  return arr.join(" ");
}
