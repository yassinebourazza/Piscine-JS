// // small database with nutrition facts, per 100 grams
// // prettier-ignore
// const nutritionDB = {
//   tomato:  { calories: 18,  protein: 0.9,   carbs: 3.9,   sugar: 2.6, fiber: 1.2, fat: 0.2   },
//   vinegar: { calories: 20,  protein: 0.04,  carbs: 0.6,   sugar: 0.4, fiber: 0,   fat: 0     },
//   oil:     { calories: 48,  protein: 0,     carbs: 0,     sugar: 123, fiber: 0,   fat: 151   },
//   onion:   { calories: 0,   protein: 1,     carbs: 9,     sugar: 0,   fiber: 0,   fat: 0     },
//   garlic:  { calories: 149, protein: 6.4,   carbs: 33,    sugar: 1,   fiber: 2.1, fat: 0.5   },
//   paprika: { calories: 282, protein: 14.14, carbs: 53.99, sugar: 1,   fiber: 0,   fat: 12.89 },
//   sugar:   { calories: 387, protein: 0,     carbs: 100,   sugar: 100, fiber: 0,   fat: 0     },
//   orange:  { calories: 49,  protein: 0.9,   carbs: 13,    sugar: 9,   fiber: 0.2, fat: 0.1   },
// }

// const groceriesCart = { orange: 500, oil: 20, sugar: 480 }

function filterEntries(obj,func) {
    let res = {}
    for (let key in obj) {
        if (func([key,obj[key]])) res[key]= obj[key]
    }
    return res
}
function mapEntries(obj,func) {
    let res = {}
    for (let key in obj) {
        const [newKey, newValue] = func([key,obj[key]])
        res[newKey] = newValue
    }
    return res
}
function reduceEntries(obj,func,count) {
    let keys = Object.keys(obj)
    let start = 0
    if (count===undefined) {
        count=keys[0]
        start = 1
    }
    for (let key =start ; key<keys.length;key++) { 
        count = func([keys[key],obj[keys[key]]],count)
    }
    return count
}

function totalCalories(card) {
    return reduceEntries(card, ([key,value],acc)=> acc + value/100 * nutritionDB[key].calories)
}
function lowCarbs(card) {
    return filterEntries(card, ([key,value]) => 50 > (value/100 * nutritionDB[key].carbs))
}
function cartTotal(card) {
    return mapEntries(card, ([key,value]) => {
        let res = {}
        for (let k in nutritionDB[key]) {            
            res[k] = +(value/ 100 * nutritionDB[key][k]).toFixed(1)
        }
        return res
    })
}


// console.log('Total calories:')
// console.log(totalCalories(groceriesCart))
// console.log('Items with low carbs:')
// console.log(lowCarbs(groceriesCart))
// console.log('Total cart nutritional facts:')
// console.log(cartTotal(groceriesCart))