let arr = {a:1,b:2,c:{d:2}}

console.log(deepCopy({a:1,b:2,c:{d:2}}));
console.log(deepCopy([1,2,3,[1,2,{a:2,b:3}]]));
console.log(deepCopy({a:/hello/}));
console.log(deepCopy([/hello/]));
console.log(deepCopy([1,'a']));


function deepCopy(data) {    
    let result = []
    if (Array.isArray(data)) {
        for (let el of data) {
            if(!Array.isArray(el) && Object.prototype.toString.call(el).slice(8,-1) !='Object'){
                result.push(el)
            } else {
                result.push(deepCopy(el))
            }
        } 
    } else {
        result = {}
        for (let el in data) {
            if(!Array.isArray(data[el]) && Object.prototype.toString.call(data[el]).slice(8,-1) !='Object'){                
                result[el] = data[el]
            } else {
                result[el] = deepCopy(data[el])
            }
        } 
    }

    return result
}