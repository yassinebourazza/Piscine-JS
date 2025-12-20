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
        count = func(count,[keys[key],obj[keys[key]]])
    }
    return count
}

function totalCalories(card) {
    return reduceEntries(card, (acc,[key,value])=> +(acc + value/100 * nutritionDB[key].calories).toFixed(1),0)
}
function lowCarbs(card) {
    return filterEntries(card, ([key,value]) => 50 > (value/100 * nutritionDB[key].carbs))
}
function cartTotal(card) {
    return mapEntries(card, ([key,value]) => {
        let res = {}
        for (let k in nutritionDB[key]) {            
            res[k] = +(value/ 100 * nutritionDB[key][k]).toFixed(3)
        }
        return [key,res]
    })
}
