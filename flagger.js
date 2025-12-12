function flags(obj) {
    let result = {alias:{},description : ''}
    let keys = Object.keys(obj)
    console.log(keys);
    
    for (let key of keys) [
        result.alias[key[0]] = key,
    ]
    if (keys.includes('help')) {
        for (let key of obj['help']) {
            if (obj[key]) {
                result.description += `-${key[0]}, --${key}: ${obj[key]}, `

            }
        }
    } else {
         for (let key of keys) {
            console.log(key);
            result.description += `-${key[0]}, --${key}: ${obj[key]}, `
        }
    }
    return result
}

// console.log(flags({
//   multiply: 'multiply the values',
//   divide: 'divides the values',
//   help: ['divide','multily']
// }));


// {
//   alias: { h: 'help', m: 'multiply', d: 'divide'}
//   description: '-d, --divide: divides the values',
// }