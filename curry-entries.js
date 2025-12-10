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