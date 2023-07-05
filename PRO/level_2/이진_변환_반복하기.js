function solution(s) {
  let cnt = 0; // 이진 변환 횟수
  let rm_zero = 0; // 제거된 모든 0의 개수
  let number = s;

  while (number !== "1") {
    cnt += 1;
    // 0의 개수 세기
    if (number.includes("0")) rm_zero += number.split("0").length - 1;
    // 0을 제거한 후 number의 길이를 2진법으로 바꾸기
    number = Number(number.split("0").join("").length).toString(2);
  }
  return [cnt, rm_zero];
}
