function solution(n, lost, reserve) {
  let student = new Array(n + 1).fill(1); // 학생수+1만큼 1로 채운 배열 생성
  lost.map((e) => student[e]--); // 도난당한 학생 처리
  reserve.map((e) => student[e]++); // 여벌 체육복 가져온 학생 처리
  let maxStudent = 0; // 체육 수업 들을 수 있는 학생 최댓값

  student.map((e, idx) => {
    maxStudent++;
    // 도난당한 학생 경우
    if (e === 0) {
      // 앞 번호 학생이 여별 체육복 가지고 있는 경우
      if (idx - 1 > 0 && student[idx - 1] > 1) {
        student[idx - 1]--;
        student[idx]++;
        // 뒷 번호 학생이 여벌 체육복 가지고 있는 경우
      } else if (idx + 1 <= n && student[idx + 1] > 1) {
        student[idx]++;
        student[idx + 1]--;
        // 앞 뒤 번호 학생 중 여벌 체육복 가진 학생이 없는 경우
      } else maxStudent--;
    }
  });

  return maxStudent - 1;
}
