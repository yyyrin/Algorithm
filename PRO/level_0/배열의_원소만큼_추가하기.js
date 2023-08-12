function solution(arr) {
  return arr.reduce((list, cur) => list.concat(new Array(cur).fill(cur)), []);
}

function solution(arr) {
  let res = [];
  arr.map((e) => {
    for (let i = 0; i < e; i++) {
      res.push(e);
    }
  });
  return res;
}
