function solution(wallpaper) {
  let [lux, luy] = [wallpaper.length, wallpaper[0].length];
  let [rdx, rdy] = [0, 0];

  for (let i = 0; i < wallpaper.length; i++) {
    for (let j = 0; j < wallpaper[0].length; j++) {
      if (wallpaper[i][j] === "#") {
        if (i < lux) lux = i;
        if (j < luy) luy = j;
        if (i > rdx) rdx = i;
        if (j > rdy) rdy = j;
      }
    }
  }

  return [lux, luy, rdx + 1, rdy + 1];
}
