function solution(food) {
  let arr = [];
  food.map((e, i) => {
    if (e > 1) {
      arr.push(i.toString().repeat(Math.floor(e / 2)));
    }
  });
  return arr.join("") + "0" + arr.reverse().join("");
}
