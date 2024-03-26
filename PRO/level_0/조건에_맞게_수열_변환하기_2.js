function solution(arr) {
  let result = 0;

  while (true) {
    let check = 0;

    const nextArr = arr.map((e) => {
      if (e >= 50 && !(e % 2)) return e / 2;
      else if (e < 50 && e % 2) return e * 2 + 1;

      check++;
      return e;
    });

    if (check === arr.length) return result;

    arr = nextArr;
    result++;
  }
}
