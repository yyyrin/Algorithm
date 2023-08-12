function solution(num_list) {
  let a = "";
  let b = "";
  num_list.map((e) => {
    e % 2 === 0 ? (b += String(e)) : (a += String(e));
  });
  return Number(a) + Number(b);
}
