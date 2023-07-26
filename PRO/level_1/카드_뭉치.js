function solution(cards1, cards2, goal) {
  let c1_idx = 0; // cards1 인덱스
  let c2_idx = 0; // cards2 인덱스

  for (let i = 0; i < goal.length; i++) {
    if (goal[i] === cards1[c1_idx]) c1_idx += 1;
    else if (goal[i] === cards2[c2_idx]) c2_idx += 1;
    else return "No";
  }

  return "Yes";
}
