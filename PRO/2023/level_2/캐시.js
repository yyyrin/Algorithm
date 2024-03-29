function solution(cacheSize, cities) {
  // 캐시크기가 0인 경우, 모든 값에서 cache miss 발생
  if (cacheSize === 0) return cities.length * 5;

  let time = 0;
  let cache = [];

  cities.map((e) => {
    let city = e.toLowerCase(); // 소문자로 변경
    // cache에 현재 element 있다면
    if (cache.includes(city)) {
      ++time; // cache hit
      cache.splice(cache.indexOf(city), 1); // cache에서 기존 값 삭제
    } else {
      // cache에 현재 element 없다면
      if (cache.length === cacheSize) cache.shift(); // cache가 꽉 찼으면 맨 앞에 값 없애기
      time += 5; // cache miss
    }
    cache.push(city); // cache에 현재 element push
  });

  return time;
}
