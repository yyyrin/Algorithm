// 기존 통과 코드
function solution(id_list, report, k) {
  let reportObj = {}; // 유저id별 신고한 id를 배열로 저장
  id_list.forEach((e) => (reportObj[e] = []));
  let cntObj = {}; // 유저 id별 신고당한 횟수 count

  report.forEach((line) => {
    const [nowUser, targetUser] = line.split(" ");
    // 현재 유저가 이전에 신고한 적이 없는 타겟 id라면
    if (reportObj[nowUser].indexOf(targetUser) === -1) {
      reportObj[nowUser].push(targetUser);
      !cntObj[targetUser] ? (cntObj[targetUser] = 1) : cntObj[targetUser]++;
    }
  });

  // 정지 기준 넘는 유저만 필터링
  const reportedArr = Object.keys(reportObj).filter(
    (item) => cntObj[item] >= k
  );

  // 각 유저별로 처리 결과 메일 받은 횟수 배열로 반환
  return Object.values(reportObj).map(
    (array) => array.filter((item) => reportedArr.includes(item)).length
  );
}

// Set 사용하여 코드 개선
function solution(id_list, report, k) {
  const reportObj = {}; // 유저id별 신고한 id를 Set으로 저장
  const cntObj = {}; // 유저 id별 신고당한 횟수 count

  report.forEach((line) => {
    const [nowUser, targetUser] = line.split(" ");

    // 현재 유저의 첫 신고인 경우
    if (!reportObj[nowUser]) reportObj[nowUser] = new Set();

    // 현재 유저가 targetUser를 이전에 신고한 적이 없다면
    if (!reportObj[nowUser].has(targetUser)) {
      reportObj[nowUser].add(targetUser);
      cntObj[targetUser] = (cntObj[targetUser] || 0) + 1;
    }
  });

  // 정지 기준 넘는 유저만 필터링
  const reportedArr = Object.keys(cntObj).filter((item) => cntObj[item] >= k);

  // 각 유저별로 처리 결과 메일 받은 횟수 배열로 반환
  return id_list.map((userId) => {
    const reportedCount = reportObj[userId]
      ? [...reportObj[userId]].filter((item) => reportedArr.includes(item))
          .length
      : 0;
    return reportedCount;
  });
}
