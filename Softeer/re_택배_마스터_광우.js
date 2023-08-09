// 통과한 코드 //
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let array = [];

// 해당 순서에서의 최소 무게 구하기
function simulate(array, basket_weight, works) {
  let weight_sum = 0; // 총 택배 무게
  let basket = 0; // 현재 시점 바구니 무게 합
  let idx = 0;

  for (let cnt = 0; cnt < works; cnt++) {
    // 바구니 무게가 꽉 찰 때까지
    while (basket + array[idx] <= basket_weight) {
      basket += array[idx];
      idx = (idx + 1) % array.length;
    }
    weight_sum += basket;
    basket = 0; // 현재 시점 바구니 무게 reset
  }

  return weight_sum;
}

// 레일의 순서 바꿔가며 가능한 모든 조합 시도하기
// (
//    현재까지의 순열을 포함하는 배열,
//    현재 단계에서 고려해야 할 시작 인덱스,
//    배일의 마지막 인덱스,
//    택배 바구니의 무게, 일의 시행 횟수
// )
function permute(arr, l, r, basket_weight, works) {
  // 최소 무게를 아주 큰 값으로 초기화
  let min_weight = 50 * 50 * 50;

  // l과 r이 같으면 순열을 완성한 것이므로 시뮬레이션 실행
  if (l === r)
    min_weight = Math.min(min_weight, simulate(arr, basket_weight, works));
  else {
    // l부터 r까지의 모든 원소를 순회
    for (let i = l; i <= r; i++) {
      // 순열의 다음 단계로
      [arr[l], arr[i]] = [arr[i], arr[l]];
      // 재귀 호출을 통해 다음 원소로 이동
      min_weight = Math.min(
        min_weight,
        permute([...arr], l + 1, r, basket_weight, works)
      );
      // 원래 상태로 복구 (백트래킹)
      [arr[l], arr[i]] = [arr[i], arr[l]];
    }
  }
  return min_weight;
}

rl.on("line", (line) => {
  array.push(line.split(" ").map(Number));
}).on("close", () => {
  // [레일의 개수, 택배 바구니 무게, 일의 시행 횟수]
  const [rails, basket_weight, works] = array[0];
  let rail_weight = array[1];
  let min_weight = permute(rail_weight, 0, rails - 1, basket_weight, works);

  console.log(min_weight);
  process.exit();
});

// -----------------------------------------------------------
// 입력예제1은 통과, 입력예제2는 시간제한 초과(순열을 사용했기 때문) //

// const readline = require("readline");

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// let array = [];
// // 순열 구하기
// const getPermutations = function (arr, selectNumber) {
//   const results = [];
//   if (selectNumber === 1) return arr.map((e) => [e]);

//   arr.forEach((fixed, index, origin) => {
//     const rest = [...origin.slice(0, index), ...origin.slice(index + 1)];
//     const permutations = getPermutations(rest, selectNumber - 1);
//     const attached = permutations.map((permutation) => [fixed, ...permutation]);
//     results.push(...attached);
//   });
//   return results;
// };

// rl.on("line", (line) => {
//   array.push(line.split(" ").map(Number));
// }).on("close", () => {
//   // [레일의 개수, 택배 바구니 무게, 일의 시행 횟수]
//   const [rails, basket_weight, works] = array[0];
//   let rail_weight = array[1];
//   let min_weight = 50 * 50;
//   // 순열로 모든 경우의 수 구하기
//   let rail_arr = getPermutations(rail_weight, rails);

//   for (let i = 0; i < rail_arr.length; i++) {
//     let array = rail_arr[i];
//     let cnt = 0;
//     let weight_sum = 0;
//     let basket = array[0];
//     let idx = 1;

//     while (cnt !== works) {
//       if (basket + array[idx] <= basket_weight) {
//         basket += array[idx];
//         idx = (idx + 1) % rails;
//       } else {
//         weight_sum += basket;
//         basket = 0;
//         cnt++;
//       }
//     }

//     if (weight_sum < min_weight) min_weight = weight_sum;
//   }

//   console.log(min_weight);
//   process.exit();
// });
