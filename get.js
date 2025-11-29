function get(obj,path) {
    let paths = path.split('.')
    result = rucersion(obj,paths)
    return result
}

function rucersion(obj,paths) {
    for (let key of paths) {
        if (typeof obj[key] == 'object' && obj != null) {
            return rucersion(obj[key],paths.slice(1))
        }
        return obj[key]
    }
}