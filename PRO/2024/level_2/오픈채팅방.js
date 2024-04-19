function solution(record) {
  const nicknameObj = {};
  let result = [];

  record.forEach((line) => {
    const [command, id, nickname] = line.split(" ");
    if (command !== "Leave") nicknameObj[id] = nickname;
    if (command !== "Change") result.push([id, command]);
  });

  return result.map(([id, command]) => {
    if (command === "Enter") return `${nicknameObj[id]}님이 들어왔습니다.`;
    else if (command === "Leave") return `${nicknameObj[id]}님이 나갔습니다.`;
  });
}
