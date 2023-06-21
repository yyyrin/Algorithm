function solution(spell, dic) {
  // spell과 dic 모두 sort해서 정렬한 다음, 같은 문자열 있는지 indexOf로 판단
  return dic
    .map((e) => e.split("").sort().join(""))
    .indexOf(spell.sort().join("")) > -1
    ? 1
    : 2;
}
