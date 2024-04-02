function solution(s, n) {
  return s
    .split("")
    .map((e) => {
      const num = e.charCodeAt();

      if (num === 32) return e; // 공백인 경우
      // 소문자이면서 다음 알파벳이 z를 넘어가는 경우, 혹은 대문자이면서 다음 알파벳이 z를 넘어가는 경우
      if (num + n > 122 || (num <= 90 && num + n > 90))
        return String.fromCharCode(num + n - 26);

      return String.fromCharCode(num + n);
    })
    .join("");
}
