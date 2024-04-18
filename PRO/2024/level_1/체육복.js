function solution(n, lost, reserve) {
  let arr = new Array(n + 1).fill(1);

  reserve.forEach((e) => arr[e]++); // 여벌 체육복 가져온 학생
  lost.forEach((e) => arr[e]--); // 체육복 도난당한 학생

  for (let i = 1; i <= arr.length; i++) {
    // 체육복이 없는 경우
    if (arr[i] === 0) {
      // 앞 번호 학생이 여벌 체육복이 있는 경우
      if (arr[i - 1] === 2) {
        arr[i - 1]--;
        arr[i]++;
      }
      // 뒷 번호 학생이 여벌 체육복이 있는 경우
      else if (arr[i + 1] === 2) {
        arr[i + 1]--;
        arr[i]++;
      }
    }
  }

  return arr.filter((e) => e >= 1).length - 1;
}
