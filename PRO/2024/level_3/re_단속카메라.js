function solution(routes) {
  let cnt = 1; // 카메라 설치 개수

  // 진입한 지점 기준으로 오름차순 정렬
  routes.sort((a, b) => a[0] - b[0]);

  // 카메라 설치한 지점
  let point = routes[0][1];

  for (let i = 1; i < routes.length; i++) {
    // 진입한 지점과 나간 지점
    const [start, end] = routes[i];
    // 카메라 설치한 지점이 현재 진입한 지점보다 이전에 있는 경우
    // 현재 나간 지점으로 카메라 추가 설치
    if (point < start) {
      cnt++;
      point = end;
    }

    // 카메라 설치한 지점이 현재 나간 지점보다 이후에 있는 경우
    if (point > end) point = end;
  }

  return cnt;
}
