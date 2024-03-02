function solution(number) {
  return (
    number.split("").reduce((acc, cur) => {
      return (acc += Number(cur));
    }, 0) % 9
  );
}
