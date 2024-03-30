function solution(s) {
  let changeCnt = 0;
  let totalZeroCnt = 0;

  while (s !== "1") {
    changeCnt++;
    const zeroCnt = s.split("").filter((e) => e === "0").length;
    totalZeroCnt += zeroCnt;
    s = (s.length - zeroCnt).toString(2);
  }

  return [changeCnt, totalZeroCnt];
}
