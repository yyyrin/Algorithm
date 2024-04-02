// 내 풀이
function solution(cards1, cards2, goal) {
  let card1 = cards1.shift();
  let card2 = cards2.shift();

  for (let goalWord of goal) {
    if (goalWord === card1) card1 = cards1.shift();
    else if (goalWord === card2) card2 = cards2.shift();
    else return "No";
  }

  return "Yes";
}

// 다른 풀이
function solution(cards1, cards2, goal) {
  for (let goalWord of goal) {
    if (goalWord === cards1[0]) cards1.shift();
    else if (goalWord === cards2[0]) cards2.shift();
    else return "No";
  }

  return "Yes";
}
