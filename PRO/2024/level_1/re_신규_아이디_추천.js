function solution(new_id) {
  const regex = /[~!@#$%^&*()=+\[{}\]:?,<>\/]/g;
  const regexSpots = /\.{2,}/g;
  const regexSpotFE = /^\.{1,}|\.{1,}$/g;
  const regexSpotEnd = /\.{1,}$/g;

  new_id = new_id
    .toLowerCase()
    .replace(regex, "")
    .replace(regexSpots, ".")
    .replace(regexSpotFE, "");

  new_id = new_id === "" ? "a" : new_id;
  new_id =
    new_id.length >= 16
      ? new_id.slice(0, 15).replace(regexSpotEnd, "")
      : new_id;
  new_id = new_id.padEnd(3, new_id.slice(-1));

  return new_id;
}
