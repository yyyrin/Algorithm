function solution(X, Y) {
  const XObj = {};
  const YObj = {};

  // 한 자리 숫자별 개수 구하기
  X.split("").forEach((e) => (XObj[e] = (XObj[e] || 0) + 1));
  Y.split("").forEach((e) => (YObj[e] = (YObj[e] || 0) + 1));

  let result = [];
  for (let i = 9; i >= 0; i--) {
    // X와 Y가 공통으로 가지고 있는 한 자리 숫자인 경우
    if (XObj[i] && YObj[i]) {
      // 공통되는 숫자가 0밖에 없는 경우
      if (!result.length && i === 0) result.push("0");
      else result.push((i + "").repeat(Math.min(XObj[i], YObj[i])));
    }
  }

  // 숫자 짝궁이 존재하지 않는 경우
  if (!result.length) return "-1";

  return result.join("");
}
