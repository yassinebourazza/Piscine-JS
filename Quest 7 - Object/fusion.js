function fusion(obj1,obj2) {
    var newObj = {}
    let keys = new Set([...Object.keys(obj1), ...Object.keys(obj2)])
    keys = [...keys]
    for (let key of keys) {
        if (Array.isArray(obj1[key]) && Array.isArray(obj2[key])){
            newObj[key] = [...obj1[key],...obj2[key]]
        } else if (typeof obj1[key] == 'string' && typeof obj2[key] == 'string') {
            newObj[key] = obj1[key] + ' ' + obj2[key]
        } else if (typeof obj1[key] == 'number' && typeof obj2[key] == 'number') {
             newObj[key] = obj1[key] + obj2[key]
        } else if (typeof obj1[key] == 'object' && typeof obj2[key] == 'object') {
            newObj[key] = fusion(obj1[key],obj2[key])
        } else if (typeof obj1[key] != typeof obj2[key]) {
            if (obj2[key] == undefined) {
                newObj[key] = obj1[key]
                continue
            }
             newObj[key] = obj2[key]
        }
    }
   
   
    
    return newObj
}
