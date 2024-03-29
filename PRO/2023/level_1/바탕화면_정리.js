function solution(wallpaper) {
  let [lux, luy, rdx, rdy] = [wallpaper.length, wallpaper[0].length, 0, 0];

  for (let i = 0; i < wallpaper.length; i++) {
    const line = [...wallpaper[i]];

    for (let j = 0; j < line.length; j++) {
      if (line[j] === "#") {
        if (i < lux) lux = i;
        if (j < luy) luy = j;
        if (i + 1 > rdx) rdx = i + 1;
        if (j + 1 > rdy) rdy = j + 1;
      }
    }
  }

  return [lux, luy, rdx, rdy];
}
