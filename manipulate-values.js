const nutrients = { carbohydrates: 12, protein: 20, fat: 5 }

function filterValues(obj,func) {
    let newObj = {}
    for (let key in obj) {
        if (func(obj[key])) newObj[key] = obj[key]
    }
    return newObj
}

function mapValues(obj, func) {
     let newObj = {}
    for (let key in obj) {
       newObj[key] =   func(obj[key]) 
    }
    return newObj
}

function reduceValues(obj, func) {
     let count = 0
    for (let key in obj) {
       count = func(count,obj[key]) 
    }
    return count
}



// console.log(filterValues(nutrients, (nutrient) => nutrient <= 12))
// // output: { carbohydrates: 12, fat: 5 }

// console.log(mapValues(nutrients, (v) => v+1))
// // output: { carbohydrates: 13, protein: 21, fat: 6 }

// console.log(reduceValues(nutrients, (acc, cr) => acc + cr))
// // output: 37