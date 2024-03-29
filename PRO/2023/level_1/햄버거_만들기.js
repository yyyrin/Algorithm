function solution(ingredient) {
  let cnt = 0; // 햄버거 개수
  let stack = []; // 햄버거 가능한지 하나하나 확인할 배열

  ingredient.forEach((e) => {
    stack.push(e);

    // 햄버거를 만들 수 있도록 배열의 길이가 4 이상이라면
    if (stack.length >= 4) {
      // 배열 뒤에서 원소 4개 잘라서 문자열로 합치기
      const hamburger = stack.slice(-4).join("");
      // 햄버거 만들 수 있는 경우
      if (hamburger === "1231") {
        cnt++; // 개수 증가시키기
        // 햄버거 만든 원소 지우기
        stack.pop();
        stack.pop();
        stack.pop();
        stack.pop();
      }
    }
  });

  return cnt;
}
