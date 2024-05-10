function solution(orders, course) {
  let result = []; // 최종 결과 저장

  course.forEach((num) => {
    const obj = {};
    let max = 0;

    orders.forEach((order) => {
      const combinations = getCombinations([...order], num); // 조합 구하기

      combinations.forEach((combination) => {
        const menu = combination.sort().join(""); // 조합 정렬하여 문자열로 변환

        // 해당 조합이 있다면 카운트 증가
        if (obj[menu]) {
          obj[menu]++;
          // 가장 많이 주문된 조합 찾기 위해 각 조합의 카운트 확인 후 최대 값 갱신
          max = max < obj[menu] ? obj[menu] : max;
        } else obj[menu] = 1;
      });
    });

    // 최대 값에 해당하는 조합을 result 배열에 추가
    if (max >= 2) {
      for (const [key, value] of Object.entries(obj)) {
        if (value === max) result.push(key);
      }
    }
  });

  return result.sort();
}

// 조합 계산하는 함수
const getCombinations = (arr, selectNumber) => {
  const result = [];

  if (selectNumber === 1) {
    return arr.map((val) => [val]);
  }

  arr.forEach((fixed, index, origin) => {
    const rest = origin.slice(index + 1);
    const combinations = getCombinations(rest, selectNumber - 1);
    const attached = combinations.map((combination) => [fixed, ...combination]);
    result.push(...attached);
  });

  return result;
};
