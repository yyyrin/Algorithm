function solution(record) {
  let id_nickname = {}; // id: nickname
  let modify_msg = []; // [command, id]
  let result = [];

  // id별 nickname을 갱신
  record.forEach((rec) => {
    const [command, id, nickname] = rec.split(" ");
    if (command !== "Leave") id_nickname[id] = nickname;
    if (command !== "change") modify_msg.push([command, id]);
  });

  // command별로 맞는 메세지와 id에 해당하는 nickname을 넣기
  modify_msg.forEach((ele) => {
    if (ele[0] === "Enter")
      result.push(`${id_nickname[ele[1]]}님이 들어왔습니다.`);
    if (ele[0] === "Leave")
      result.push(`${id_nickname[ele[1]]}님이 나갔습니다.`);
  });

  return result;
}