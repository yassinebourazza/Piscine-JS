function get(obj,path) {
    let paths = path.split('.')
    let result = rucersion(obj,paths)
    return result
}
function rucersion(obj,paths) {
    console.log(obj);
    
    for (let index in paths) {                
        if (typeof obj[paths[index]] == 'object' && obj != null) {
            return rucersion(obj[paths[index]],paths.slice(1))
        } 
        if (obj[paths[index]]==undefined) {
            return undefined
        }
        if (paths[+index+1] != undefined) {
            return obj[paths[index]] + "." + paths[+index+1]
        }
           
        return ""+obj[paths[index]]
    }
}

//const t = 5
// console.log(get({ a: [{ b: t }] }, 'a.0.b.toString().call()'));
//console.log(get({ a: [{ b: t }] }, 'a.0.b'));
// console.log(get({ a: [{ b: "hello" }] }, 'a.0.b'));
// console.log(get({ b: "hello" }, 'b'));
// console.log(get({ key: 'value' }, 'nx'));
// console.log(get({ nested: { key: 'value' } }, 'nx.nx'));

