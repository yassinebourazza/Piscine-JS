function get(obj,path) {
    let result = rucersion(obj,path.split('.'))
    return result
}
function rucersion(obj,paths) {
    
                   
        if (typeof obj[paths[0]] == 'object' && obj != null) {
            return rucersion(obj[paths[0]],paths.slice(1))
        } 
        if (obj[paths[0]]==undefined) {
            return undefined
        }
        
        if (typeof obj[paths[0]] == "function") {
            if (paths[1] != undefined) {
                return obj[paths[0]].toString
            }
            return obj[paths[0]]
        } 
        return obj[paths[0]]
}

