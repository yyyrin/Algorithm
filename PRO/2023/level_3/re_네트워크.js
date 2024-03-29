function solution(n, computers) {
  let visited = new Array(n).fill(false);
  let cnt = 0;

  function dfs(idx) {
    visited[idx] = true;

    for (let k = 0; k < n; k++) {
      if (!visited[k] && computers[idx][k] === 1) {
        dfs(k);
      }
    }
  }

  for (let i = 0; i < n; i++) {
    if (!visited[i]) {
      dfs(i);
      cnt++;
    }
  }

  return cnt;
}

// 틀린 코드 //
// function solution(n, computers) {
//   let visited = new Array(n).fill(false);
//   let cnt = n;

//   function dfs(idx) {
//     if (visited[idx]) return;
//     visited[idx] = true;

//     for (let i = idx + 1; i < n; i++) {
//       if (!visited[i] && computers[idx][i] === 1) {
//         cnt--;
//         dfs(i);
//       }
//     }
//   }

//   dfs(0);

//   return cnt;
// }
