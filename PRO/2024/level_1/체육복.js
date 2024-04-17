function solution(n, lost, reserve) {
  let student = new Array(n + 1).fill(1);
  student[0] = 0;
  reserve.forEach((num) => student[num]++);
  lost.forEach((num) => student[num]--);

  student.forEach((e, idx) => {
    if (idx > 0 && e < 1) {
      if (student[idx - 1] === 2) {
        student[idx - 1]--;
        student[idx]++;
      } else if (student[idx + 1] === 2) {
        student[idx + 1]--;
        student[idx]++;
      }
    }
  });

  return student.filter((e) => e > 0).length;
}
