function solution(genres, plays) {
  // 장르: [총 재생횟수, [고유번호, 재생횟수], [고유번호, 재생횟수], ...]
  const obj = {};
  // 베스트 앨범에 들어갈 노래의 고유번호 저장할 배열
  const result = [];

  // 장르별 총 재생횟수와 [고유변호, 재생횟수]를 객체에 저장
  genres.forEach((genre, idx) => {
    if (obj[genre]) {
      obj[genre][0] += plays[idx];
      obj[genre].push([idx, plays[idx]]);
    } else {
      obj[genre] = [plays[idx], [idx, plays[idx]]];
    }
  });

  // obj를 총 재생횟수 기준으로 내림차순 정렬
  const sortedGenres = Object.entries(obj).sort((a, b) => b[1][0] - a[1][0]);

  //
  for (let i = 0; i < sortedGenres.length; i++) {
    // 현재 장르의 [총 재생횟수, [고유번호, 재생 횟수], [고유번호, 재생 횟수], ...]
    let nowGenre = sortedGenres[i][1];
    // 총 재생횟수 지우기
    nowGenre.shift();
    // 재생 횟수 기준으로 내림차순 정렬 및 상위 2개 잘라서 result에 푸쉬
    result.push(
      ...nowGenre
        .sort((a, b) => b[1] - a[1])
        .slice(0, 2)
        .map((e) => e[0])
    );
  }

  return result;
}
