function groupPrice(str) {
    let result = [str.match(/[A-Z$]+\d+.\d+/g)+'',str.match(/\d+(?=\.)/)[0],str.match(/(?<=\.)\d+/g)+'']
    for (let index in result) {
        if (result[index] == 'null') {
            return []
        }
    }
    return [result]
}

console.log(groupPrice('USD12.31'));
console.log(groupPrice('The price of the cereals is $4.00.'));
console.log(groupPrice('this, 0.32, is not a match'));
console.log(groupPrice('The price of the cereals is $4.00.'));



// console.log('i have a car and a card'.match(/(car|card)/g));
// console.log('i have a card'.match(/(car|card)/g));

