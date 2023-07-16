function solution(name, yearning, photo) {
  let res = [];
  photo.map((element) => {
    let score = 0;
    element.map((e) => {
      name.indexOf(e) > -1 ? (score += yearning[name.indexOf(e)]) : null;
    });
    res.push(score);
  });
  return res;
}
