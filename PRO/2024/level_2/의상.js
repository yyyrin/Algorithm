function solution(clothes) {
  const clothesObj = {};

  // 종류별 의상 개수를 객체로 저장
  clothes.forEach(([_, type]) => {
    clothesObj[type] = (clothesObj[type] || 0) + 1;
  });

  return Object.values(clothesObj).reduce((acc, cur) => acc * (cur + 1), 1) - 1;
}
