// 통과한 코드
function solution(files) {
  return files.sort((a, b) => {
    // 숫자가 나오기 전까지의 문자열을 추출하고 소문자로 변환
    const aHead = a.match(/^\D+/)[0].toLowerCase();
    const bHead = b.match(/^\D+/)[0].toLowerCase();

    if (aHead < bHead) return -1;
    if (aHead > bHead) return 1;

    // 숫자를 추출하고, 앞의 0들을 제거
    const aNum = a.match(/\d+/)[0].replace(/^0+/, "");
    const bNum = b.match(/\d+/)[0].replace(/^0+/, "");

    return aNum - bNum;
  });
}

// 틀린 코드
function solution(files) {
  let arr = [];

  files.forEach((file) => {
    const fileName = { HEAD: "", NUMBER: "", TAIL: "" };

    for (let i = 0; i < file.length; i++) {
      if (!Number.isInteger(Number(file[i])) && !fileName.NUMBER)
        fileName.HEAD += file[i];
      else if (
        file[i] !== " " &&
        Number.isInteger(Number(file[i])) &&
        !fileName.TAIL
      )
        fileName.NUMBER += file[i];
      else fileName.TAIL += file[i];
    }

    arr.push(fileName);
  });

  arr.sort((a, b) => {
    let aHead = a.HEAD.toLowerCase();
    let bHead = b.HEAD.toLowerCase();
    let aNumber = Number(a.NUMBER);
    let bNumber = Number(b.NUMBER);

    if (aHead < bHead) return -1;
    else if (aHead > bHead) return 1;
    else {
      if (aNumber < bNumber) return -1;
      else if (aNumber > bNumber) return 1;
    }
    return 0;
  });

  return arr.map((e) => e.HEAD + e.NUMBER + e.TAIL);
}
