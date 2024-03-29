function solution(clothes) {
  let obj = {};
  clothes.map((arr) => {
    if (!obj[arr[1]]) obj[arr[1]] = [arr[0]];
    else obj[arr[1]].push(arr[0]);
  });

  return (
    Object.values(obj).reduce((acc, cur) => {
      return acc * (cur.length + 1);
    }, 1) - 1
  );
}
