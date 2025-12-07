normal = /hi/
begin = /^hi/
end = /hi$/
beginEnd = /^hi$/


console.log('hey hi hello'.match(normal));
console.log('hi hello'.match(normal));
console.log('hey hi'.match(normal));
console.log('hi'.match(normal));


console.log('hey hi hello'.match(begin));
console.log('hi hello'.match(begin));
console.log('hey hi'.match(begin));
console.log('hi'.match(begin));


console.log('hey hi hello'.match(end));
console.log('hi hello'.match(end));
console.log('hey hi'.match(end));
console.log('hi'.match(end));

console.log('hey hi hello'.match(beginEnd));
console.log('hi hello'.match(beginEnd));
console.log('hey hi'.match(beginEnd));
console.log('hi'.match(beginEnd));
