function groupPrice(str) {
    return [[str.match(/[A-Z$]+\d+.\d+/g)[0],str.match(/\d+(?=\.)/g)[0],str.match(/(?<=\.)\d+/g)[0]]]
}

console.log(groupPrice('USD12.31'));
console.log(groupPrice('The price of the cereals is $4.00.'));


// console.log('i have a car and a card'.match(/(car|card)/g));
// console.log('i have a card'.match(/(car|card)/g));

