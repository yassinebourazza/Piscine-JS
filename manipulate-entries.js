// // small database with nutrition facts, per 100 grams
// // prettier-ignore
const nutritionDB = {
  tomato:  { calories: 18,  protein: 0.9,   carbs: 3.9,   sugar: 2.6, fiber: 1.2, fat: 0.2   },
  vinegar: { calories: 20,  protein: 0.04,  carbs: 0.6,   sugar: 0.4, fiber: 0,   fat: 0     },
  oil:     { calories: 48,  protein: 0,     carbs: 0,     sugar: 123, fiber: 0,   fat: 151   },
  onion:   { calories: 0,   protein: 1,     carbs: 9,     sugar: 0,   fiber: 0,   fat: 0     },
  garlic:  { calories: 149, protein: 6.4,   carbs: 33,    sugar: 1,   fiber: 2.1, fat: 0.5   },
  paprika: { calories: 282, protein: 14.14, carbs: 53.99, sugar: 1,   fiber: 0,   fat: 12.89 },
  sugar:   { calories: 387, protein: 0,     carbs: 100,   sugar: 100, fiber: 0,   fat: 0     },
  orange:  { calories: 49,  protein: 0.9,   carbs: 13,    sugar: 9,   fiber: 0.2, fat: 0.1   },
}

// const groceriesCart = { orange: 500, oil: 20, sugar: 480 }

const filterEntries = (arr) =>  50 > (arr[1]/100 * nutritionDB[arr[0]].carbs)
const mapEntries = (arr) => {
    let res = {}
    for (let key in nutritionDB[arr[0]]) {
        res[key] = +(arr[1]/100 * nutritionDB[arr[0]][key]).toFixed(1)
    }
    return res
}
const reduceEntries = (acc,arr) =>  acc + (arr[1]/100 * nutritionDB[arr[0]].calories)

function totalCalories(gro) {
    let result = 0
    for (let key in gro) {        
        result = reduceEntries(result,[key,gro[key]])
    }
    return result
}
function lowCarbs(gro) {
    let result = {}
     for (let key in gro) { 
        if (filterEntries([key,gro[key]]))  result[key] = gro[key]
    }
    return result
}
function cartTotal(gro) {
      let result = {}
     for (let key in gro) {         
        result[key] = mapEntries([key,gro[key]])
    }
    return result
}


// console.log('Total calories:')
// console.log(totalCalories(groceriesCart))
// console.log('Items with low carbs:')
// console.log(lowCarbs(groceriesCart))
// console.log('Total cart nutritional facts:')
// console.log(cartTotal(groceriesCart))