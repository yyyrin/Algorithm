function solution(name, yearning, photo) {
  return photo.map((line) =>
    line.reduce((acc, cur) => acc + (yearning[name.indexOf(cur)] || 0), 0)
  );
}
