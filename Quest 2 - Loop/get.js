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

    "toString"
  let x = 5
  const t = (x) => x;
     console.log(get({ a: [{ b: t }] }, 'a.0.b.toString'));
console.log(get({ a: [{ b: t }] }, 'a.0.b'));
console.log(get({ a: [{ b: "hello" }] }, 'a.0.b'));
console.log(get({ b: "hello" }, 'b'));
console.log(get({ key: 'value' }, 'nx'));
console.log(get({ nested: { key: 'value' } }, 'nx.nx'));

console.log(t);
console.log(t.toString);

