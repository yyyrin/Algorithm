function solution(polynomial) {
  let x_ans = 0;
  let num_ans = 0;
  let arr = polynomial.split(" + ");

  arr.forEach((e) => {
    if (e.includes("x")) {
      // x를 포함하는 경우 x를 공백으로 바꾸되, x를 제거했을 때 공백이라면 "1" 넣어주기
      let x_num = e.replace("x", "") || "1";
      x_ans += Number(x_num);
    } else {
      num_ans += Number(e);
    }
  });

  let ans = [];
  if (x_ans) ans.push(`${x_ans === 1 ? "" : x_ans}x`);
  if (num_ans) ans.push(num_ans);

  return ans.join(" + ");
}
