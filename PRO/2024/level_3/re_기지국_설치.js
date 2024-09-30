// 시간 초과 발생한 코드
function solution(n, stations, w) {
  let result = 0;
  const apartment = new Array(n + 1).fill(false);

  // 현재 전파 전달되는 아파트를 true로 표시
  stations.forEach((e) => {
    for (let i = e - w; i <= e + w; i++) {
      if (i > 0 && i <= n) apartment[i] = true;
    }
  });

  // for문을 중첩으로 사용하여 최악의 경우 O(n * w) 시간이 소요되므로 시간 초과 발생
  for (let i = 1; i <= n; i++) {
    // 전파 전달되지 않는 경우
    if (!apartment[i]) {
      result++; // 기지국 추가
      // 전파 전달되는 아파트 업데이트
      for (let j = i; j <= i + w * 2; j++) apartment[j] = true;
    }
  }

  return result;
}

// 통과한 코드
function solution(n, stations, w) {
  let result = 0; // 설치한 기지국 수
  let stationIdx = 0; // 설치된 기지국 index
  let position = 1; // 현재 탐색 중인 아파트 위치

  while (position <= n) {
    // 현재 아파트가 설치된 기지국 범위 내에 있는 경우
    if (stationIdx < stations.length && position >= stations[stationIdx] - w) {
      position = stations[stationIdx] + w + 1; // 기지국 범위 끝으로 이동
      stationIdx++; // 다음 설치된 기지국 index로
    } else {
      // 기지국 범위 밖인 경우, 기치국 추가로 설치
      result++;
      position += 2 * w + 1; // 새 기지국의 전파 범위 끝으로 위치 업데이트
    }
  }

  return result;
}
