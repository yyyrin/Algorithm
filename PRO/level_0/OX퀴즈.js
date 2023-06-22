function solution(quiz) {
  let ans = [];
  quiz.map((element) => {
    let arr = element.split(" ");
    let result =
      arr[1] === "+"
        ? Number(arr[0]) + Number(arr[2])
        : Number(arr[0]) - Number(arr[2]);
    result === Number(arr[4]) ? ans.push("O") : ans.push("X");
  });
  return ans;
}
