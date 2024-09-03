function solution(n) {
  const ternary = n.toString(3);
  // 3진법으로 바꿨을 때 0을 포함하고 있지 않다면 원하는 값과 같음
  if (!ternary.includes("0")) return ternary;
  // 3진법으로 바꿨을 때 0을 포함하는 경우, 어떻게 바꿔줘야할지 고민하다가 막힘
}

// 다른 방법 모색하여 해결
function solution(n) {
  const arr = ["4", "1", "2"];
  let result = "";

  // n을 3으로 나눈 나머지에 해당하는 arr의 index 값을 reuslt 앞에 붙임
  while (n) {
    result = arr[n % 3] + result;
    n = n % 3 === 0 ? n / 3 - 1 : Math.floor(n / 3);
  }

  return result;
}
