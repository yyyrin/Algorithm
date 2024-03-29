function solution(skill, skill_trees) {
  let result = 0; // 가능한 스킬트리 개수

  // 선행 스킬 순서에 있는 문자만 필터링
  let filtered = skill_trees.map((word) => {
    return word.split("").filter((e) => skill.includes(e));
  });

  for (let i = 0; i < filtered.length; i++) {
    let isValid = true; // 순서대로 배웠는지 확인

    for (let j = 0; j < filtered[i].length; j++) {
      // 순서대로 학습하지 않은 경우
      if (skill[j] !== filtered[i][j]) {
        isValid = false;
        break;
      }
    }

    if (isValid) result++;
  }

  return result;
}
