function defaultCurry(obj1) {
    return function(obj2) {
        let res = {}
        let keys = new Set([...Object.keys(obj1), ...Object.keys(obj2)])
        keys = [...keys]
        for (let key of keys) {
            if (obj1[key] && obj2[key]) {
                res[key] = obj2[key]
            } else if (obj1[key]) {
                res[key] = obj1[key]
            } else {
                res[key] = obj2[key]
            }
        }
         return res
    }
}

function mapCurry(func) {
    return function(obj) {
        let res = {}
        for (let [key,value] of Object.entries(obj)) {            
            const [k,v] = func([key,value])
            res[k] = v
        }
        return res
    }
}

function reduceCurry(func) {
    return function(obj,acc) {
        let keys = Object.keys(obj)
        let start = 0
        if (acc==undefined)  {
            acc = keys[0]
            start = 1
        }
        for (let key of keys) {
            acc = func(acc,[key,obj[key]])
        }
        return acc
    }
}

function filterCurry(func) {
    return function(obj) {
        let GlobalKeyVal = Object.entries(obj)
        let res = {}
        for(let keyVal of GlobalKeyVal) {
            if (func(keyVal)) res[keyVal[0]] = keyVal[1]
        }
        return res
    }
}

function reduceScore(objects,acc) {
    if (acc ==undefined) acc =0
    let keys = Object.entries(objects)
    for (let obj of keys) {
        if (obj[1].isForceUser) {
            acc += obj[1].pilotingScore + obj[1].shootingScore
        }
    }
    return acc
}

function filterForce(objects) {
    let res = {}
    let keys = Object.entries(objects)
    for (let obj of keys) {
        if (obj[1].isForceUser && obj[1].shootingScore >= 80) {
            res[obj[0]] = obj[1]
        }
    }
    return res
}

function mapAverage(objects) {
    let res= {}
    let keys = Object.entries(objects)
     for (let obj of keys) {
            res[obj[0]] = {...obj[1]}
            res[obj[0]].averageScore = (res[obj[0]].shootingScore + res[obj[0]].pilotingScore) /2
    }
    return res
}
