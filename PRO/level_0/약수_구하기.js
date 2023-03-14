function solution(n) {
  let res = []
  
  for(let i=0; i<n+1; i++){ 
  if(n % i === 0) {
      res.push(i)
  }
}

return res;
  
}