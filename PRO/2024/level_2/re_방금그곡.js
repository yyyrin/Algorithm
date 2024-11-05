function timeToMinutes(time) {
  const [hour, min] = time.split(":");
  return Number(hour) * 60 + Number(min);
}

// #이 포함된 음표를 숫자로 변환
function parseNotes(notes) {
  let result = notes;
  result = result.replaceAll("C#", "1");
  result = result.replaceAll("D#", "2");
  result = result.replaceAll("F#", "3");
  result = result.replaceAll("G#", "4");
  result = result.replaceAll("A#", "5");
  result = result.replaceAll("B#", "6");
  return result;
}

function solution(m, musicinfos) {
  let answer = "(None)";
  let maxPlayTime = 0;

  const convertedM = parseNotes(m); // 기억한 멜로디의 #이 포함된 음표를 숫자로 변환

  for (let musicinfo of musicinfos) {
    const [startTime, endTime, title, sheetMusic] = musicinfo.split(",");
    // 음악 재생 시간 계산
    const playingTime = timeToMinutes(endTime) - timeToMinutes(startTime);

    // 악보 정보의 #이 포함된 음표를 숫자로 변환
    let convertedSheetMusic = parseNotes(sheetMusic);

    // 재생 시간에 맞추어 악보 반복
    while (convertedSheetMusic.length < playingTime) {
      convertedSheetMusic += convertedSheetMusic;
    }
    // 정확한 재생 시간만큼 자르기
    convertedSheetMusic = convertedSheetMusic.slice(0, playingTime);

    // 조건에 맞는 음악이 있고 재생 시간이 더 길다면 업데이트
    if (convertedSheetMusic.includes(convertedM) && playingTime > maxPlayTime) {
      answer = title;
      maxPlayTime = playingTime;
    }
  }

  return answer;
}
