function solution(num_list) {
  let last = num_list[num_list.length - 1];
  let last_front = num_list[num_list.length - 2];
  return last > last_front
    ? num_list.concat(last - last_front)
    : num_list.concat(last * 2);
}
