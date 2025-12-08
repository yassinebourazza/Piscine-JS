const nutrients = { carbohydrates: 12, protein: 20, fat: 5 }

function filterKeys(obj,regex) {
    let newObj = {}
    let keys = Object.keys(obj)
    for (let key of keys) {
        if (regex(key)) newObj[key] = obj[key]
    }
    return newObj
}

function mapKeys(obj,toStr) {
    let newObj = {}
    for (let key in obj) {        
        newObj[toStr(key)] = obj[key]
    }
    return newObj
}

function reduceKeys(obj,concat,init='') {
    let str = init
    let start = 0
    let keys = Object.keys(obj)
    if (str == '') {
        str = keys[0]
        start++
    }
    for (let key=start; key < keys.length;key++) {
        str = concat(str,keys[key])
    }
    return str
}
//  console.log(reduceKeys(nutrients, (acc, cr) => `${acc}${cr}:`, ':'));

// // // console.log(filterKeys(nutrients, (key) => /protein/.test(key)))
// // // // output: { protein: 20 }

// // // console.log(mapKeys(nutrients, (k) => `-${k}`))
// // // // output: { -carbohydrates: 12, -protein: 20, -fat: 5 }

// console.log(reduceKeys(nutrients, (acc, cr) =>acc.concat(', ', cr)))
// // output: carbohydrates, protein, fat