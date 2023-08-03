// 다시 풀어볼 문제 //
function solution(X, Y) {
  let X_count = new Array(10).fill(0);
  let Y_count = new Array(10).fill(0);

  X.split("").map((e) => ++X_count[e]);
  Y.split("").map((e) => ++Y_count[e]);

  let arr = [...new Array(10)].map((_, idx) =>
    Math.min(X_count[idx], Y_count[idx])
  );
  let str =
    arr.reduce((acc, cur) => acc + cur, 0) === arr[0]
      ? "0"
      : arr.reduceRight(
          (a, c, idx) => (c ? a + idx.toString().repeat(c) : a),
          ""
        );

  return arr.reduce((a, c) => a + c, 0) ? str : "-1";
}

// 실패 + 시간초과 코드 //
function solution(X, Y) {
  X.length > Y.length ? ([X, Y] = [Y, X]) : null;
  let res = [];
  X.split("").map((e) => {
    if (Y.includes(e)) {
      res.push(e);
      Y = Y.replace(e, "");
    }
  });
  if (res.length < 1) return "-1";

  return Number(res.sort((a, b) => b - a).join("")).toString();
}
