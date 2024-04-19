function solution(skill, skill_trees) {
  let result = skill_trees.length;

  skill_trees.forEach((tree) => {
    for (let i = 1; i < skill.length; i++) {
      const idx = tree.indexOf(skill[i]);
      // 현재 tree가 해당하는 스킬을 가지고 있다면
      if (idx >= 0) {
        // 바로 직전 선행 스킬
        const preIdx = tree.indexOf(skill[i - 1]);
        // 현재 tree가 선행 스킬을 가지고 있지 않거나, 선행되지 않는 경우
        if (preIdx === -1 || idx < preIdx) {
          // 가능한 스킬 개수에서 하나 빼기
          result--;
          break;
        }
      }
    }
  });
  
  return result;
}
