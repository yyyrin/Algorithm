function solution(my_string) {
  let arr = my_string.split(" ");
  let ans = Number(arr[0]);
  for (let i = 1; i < arr.length; i += 2) {
    if (arr[i] === "+") {
      ans += Number(arr[i + 1]);
    } else {
      ans -= Number(arr[i + 1]);
    }
  }
  return ans;
}
