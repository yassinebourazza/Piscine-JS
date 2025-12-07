const sign = (num) => (num > 0) ? 1 : (num < 0) ? -1 : 0;
const sameSign = (num1, num2) => (num1*num2 > 0) ? true : (num1==0 && num2==0) ? true:false;

console.log(sameSign(5,4))
console.log(sameSign(5,0))
console.log(sameSign(0,-4))
console.log(sameSign(-5,-4))
console.log(sameSign(0,0))
console.log(sameSign(-5,4))