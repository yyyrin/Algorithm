function solution(cacheSize, cities) {
  if (cacheSize === 0) return cities.length * 5;

  let cache = [];
  let runTime = 0;

  cities.forEach((e) => {
    const city = e.toLowerCase(); // 대소문자 구분하지 않는다고 했으므로
    // 이전에 언급된 도시인 경우(cache hit)
    if (cache.includes(city)) {
      // 이미 저장된 도시 지우기
      cache.splice(cache.indexOf(city), 1);
      runTime++;
    }
    // 새로 언급된 도시인 경우(cache miss)
    else {
      // 캐시가 크기만큼 찬 경우
      if (cache.length === cacheSize) cache.shift();
      runTime += 5;
    }
    cache.push(city);
  });

  return runTime;
}
