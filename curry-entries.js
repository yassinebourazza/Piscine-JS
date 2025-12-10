// console.log(defaultCurry({
//   http: 403,
//   connection: 'close',
//   contentType: 'multipart/form-data',
// })({
//   http: 200,
//   connection: 'open',
//   requestMethod: 'GET'
// }))
// // output
// // {
// //     http: 200,
// //     connection: 'open',
// //     contentType: 'multipart/form-data',
// //     requestMethod: 'GET'
// // }

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

// // output
// const personnel = {
//   lukeSkywalker_force: { id: 5,  pilotingScore: 98, shootingScore: 56, isForceUser: true  },
//   sabineWren_force:    { id: 82, pilotingScore: 73, shootingScore: 99, isForceUser: false },
//   zebOrellios_force:   { id: 22, pilotingScore: 20, shootingScore: 59, isForceUser: false },
//   ezraBridger_force:   { id: 15, pilotingScore: 43, shootingScore: 67, isForceUser: true  },
//   calebDume_force:     { id: 11, pilotingScore: 71, shootingScore: 85, isForceUser: true  },
// }
// console.log(mapCurry(([k, v]) => [`${k}_force`, v])(personnel))

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

// console.log(reduceCurry((acc, [k, v]) => (acc += v))({ a: 1, b: 2, c: 3 }, 0))
// // output == 6

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

// console.log(filterCurry(([k, v]) => typeof v === 'string' || k === 'arr')({
//   str: 'string',
//   nbr: 1,
//   arr: [1, 2],
// }))
// // output { str: 'string', arr: [1, 2] }

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

// prettier-ignore
const personnel = {
  lukeSkywalker: { id: 5,  pilotingScore: 98, shootingScore: 56, isForceUser: true  },
  sabineWren:    { id: 82, pilotingScore: 73, shootingScore: 99, isForceUser: false },
  zebOrellios:   { id: 22, pilotingScore: 20, shootingScore: 59, isForceUser: false },
  ezraBridger:   { id: 15, pilotingScore: 43, shootingScore: 67, isForceUser: true  },
  calebDume:     { id: 11, pilotingScore: 71, shootingScore: 85, isForceUser: true  },
}

// console.log(reduceScore(personnel, 0));

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
// console.log(filterForce(personnel));


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

console.log(mapAverage(personnel));


function mapAverage(objects) {
    let res= {}
    let keys = Object.entries(objects)
    let average = reduceScore(objects)/ (keys.length*2)    
     for (let obj of keys) {
            res[obj[0]] = obj[1]
            res[obj[0]].averageScore = average
    }
    return res
}