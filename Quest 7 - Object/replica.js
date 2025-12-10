function replica(initial,...objects) {    
    for(let obj of objects) {
        let keys = Object.keys(obj)
        for (let key of keys) {
            if (initial[key]==undefined) {                
                initial[key] = obj[key]
            } else if (Array.isArray(initial[key]) && Array.isArray(obj[key])) {
                initial[key] = replica(initial[key],obj[key])
            } else if (typeof initial[key] == 'object' && !Array.isArray(initial[key]) && typeof obj[key] == 'object' && !Array.isArray(obj[key]) ) {
                initial[key] = replica(initial[key],obj[key])
            } else {
                initial[key] = obj[key]
            }
        }
    }
    return initial
}

console.log(replica({},{a:{a:'b',b:'c'}},{a:{a:3,b:'c'},b:3},{a:{a:3,b:{a:2}},b:3}));
console.log(replica({ a: { b: 2 } }, { a: [4] }));
