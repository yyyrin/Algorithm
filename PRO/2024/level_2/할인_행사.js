// 내 풀이
function solution(want, number, discount) {
  let result = 0;
  const resultStr = number.join("");

  for (let i = 0; i <= discount.length - 10; i++) {
    // 길이 10씩 자르기
    const slicedArr = discount.slice(i, i + 10);
    let cntArr = [];

    for (let fruit of want) {
      cntArr.push(slicedArr.filter((e) => e === fruit).length);
    }

    // 원하는 제품을 모두 할인 받을 수 있는 경우
    if (cntArr.join("") === resultStr) result++;
  }

  return result;
}

// 다른 풀이
function solution(want, number, discount) {
  let result = 0;

  for (let i = 0; i <= discount.length - 10; i++) {
    const slicedArr = discount.slice(i, i + 10);
    let flag = true;

    for (let j = 0; j < want.length; j++) {
      if (slicedArr.filter((e) => e === want[j]).length !== number[j]) {
        flag = false;
        break;
      }
    }
    
    if (flag) result++;
  }
  return result;
}
