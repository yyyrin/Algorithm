function factorial(n) {
    let res = 1
    for(let i=2; i<=n; i++) res *= i;
    return res;
}
function solution(balls, share) {
    return Math.round(factorial(balls)/(factorial(balls-share)*factorial(share)))
}