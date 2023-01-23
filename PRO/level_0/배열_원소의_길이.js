function solution(strlist) {
  // var answer = [];
  // for (i in strlist) {
  //     answer.push(strlist[i].length)
  // }
  // return answer;
  return strlist.map((el) => el.length)
}

// map() 메서드
// 배열 내의 모든 요소 각각에 대하여 주어진 함수를 호출한 결과를 모아 새로운 배열을 반환
