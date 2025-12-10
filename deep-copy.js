// console.log(deepCopy({a:1,b:2,c:{d:2}}));
// console.log(deepCopy([1,2,3,[1,2,{a:2,b:3}]]));


function deepCopy(data) {
    if (typeof data !='object') return
    let result = []
    if (Array.isArray(data)) {
        for (let el of data) {
            if(typeof el !='object'){
                result.push(el)
            } else {
                    result.push(deepCopy(el))
            }
        } 
    } else {
        result = {}
        for (let el in data) {
            if(typeof data[el] !='object'){                
                result[el] = data[el]
            } else {
                result[el] = deepCopy(data[el])
            }
        } 
    }

    return result
}