function solution(id_pw, db) {
  let ans = "fail";
  db.map((e) => {
    if (e[0] === id_pw[0] && e[1] === id_pw[1]) ans = "login";
    if (e[0] === id_pw[0] && e[1] !== id_pw[1]) ans = "wrong pw";
  });
  return ans;
}
