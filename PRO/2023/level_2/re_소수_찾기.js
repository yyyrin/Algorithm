function solution(numbers) {
  const array = numbers.split("");
  let primeArray = []; // 소수인 숫자 담을 배열

  for (let i = 1; i <= array.length; i++) {
    // i개 숫자를 이용하여 순열 구하기
    const permutations = getPermutations(array, i);

    permutations.forEach((arr) => {
      const num = Number(arr.join(""));
      // 소수인 동시에 이전에 구한 값이 아닌 경우
      if (isPrime(num) && !primeArray.includes(num)) {
        primeArray.push(num);
      }
    });
  }

  return primeArray.length;
}

// 순열 만들기
function getPermutations(arr, selectNumber) {
  const results = [];
  // 1개씩 택할 때, 바로 모든 배열의 원소 return
  if (selectNumber === 1) return arr.map((e) => [e]);

  arr.forEach((fixed, idx, origin) => {
    // 해당하는 fixed를 제외한 나머지 배열
    const rest = [...origin.slice(0, idx), ...origin.slice(idx + 1)];
    // 나머지에 대해 재귀를 이용하여 순열 구하기
    const permumations = getPermutations(rest, selectNumber - 1);
    // 돌아온 순열에 대해 fixed 값 붙이기
    const attached = permumations.map((permutation) => [fixed, ...permutation]);
    // 배열에 spread 연산자 이용해서 result에 push
    results.push(...attached);
  });

  return results;
}

// 소수 판별
function isPrime(number) {
  if (number < 2) return false;

  // 해당 숫자보다 작은 수로 나누어 떨어지는 경우는 소수 아님!
  for (let i = 2; i < number; i++) {
    if (number % i === 0) return false;
  }

  return true;
}
