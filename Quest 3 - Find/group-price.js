function groupPrice(str) {
    str = str.match(/(USD|\$)\d+\.\d+/g)
    if (!str) return []
    
    let result = []
    for (let s of str) {        
        result.push([''+s.match(/(.+)/g),''+s.match(/(\d+(?=.\d+))/g),''+s.match(/(?<=\d+.)(\d+)/g)])
    }
    return result 
}

// console.log(groupPrice('USD12.31'));
// console.log(groupPrice('The price of the cereals is $4.00.'));
// console.log(groupPrice('this, 0.32, is not a match'));
// console.log(groupPrice('The price of the cereals is $4.00.'));
// console.log(groupPrice('product one its USD9.98 and the second one its $10.20'))




// console.log('i have a car and a card'.match(/(car|card)/g));
// console.log('i have a card'.match(/(car|card)/g));

