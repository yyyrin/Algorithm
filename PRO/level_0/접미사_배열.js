function solution(my_string) {
  let result = [];

  for (let i = 0; i < my_string.length; i++) {
    const newString = my_string.slice(i);
    if (!result.includes(newString)) result.push(newString);
  }

  return result.sort();
}
