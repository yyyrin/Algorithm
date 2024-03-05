function solution(new_id) {
  const regex = /[~!@#$%^&*()=+\[{}\]:?,<>\/]/g;
  const regexSpots = /\.{2,}/g;
  const regexSpotFE = /^\.{1,}|\.{1,}$/g;
  const regexSpotEnd = /\.{1,}$/g;

  new_id = new_id
    .toLowerCase() // 1단계
    .replace(regex, "") // 2단계
    .replace(regexSpots, ".") // 3단계
    .replace(regexSpotFE, ""); // 4단계

  new_id = new_id === "" ? "a" : new_id; // 5단계

  // 6단계
  new_id =
    new_id.length >= 16
      ? new_id.slice(0, 15).replace(regexSpotEnd, "")
      : new_id;

  new_id = new_id.padEnd(3, new_id.slice(-1)); // 7단계

  return new_id;
}
