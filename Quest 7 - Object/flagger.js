function flags(obj) {
    let result = {alias:{h:'help'},description : ''}
    let keys = Object.keys(obj)
    console.log(keys);
    
    for (let key of keys) [
        result.alias[key[0]] = key,
    ]
    if (keys.includes('help')) {
        for (let key of obj['help']) {
            if (obj[key]) {
                if (key == obj['help'][obj['help'].length-1]) {
                    result.description += `-${key[0]}, --${key}: ${obj[key]}`
                } else {
                    result.description += `-${key[0]}, --${key}: ${obj[key]}\n`
                }

            }
        }
    } else {
         for (let key of keys) {
            if (key == keys[keys.length-1]) {
                result.description += `-${key[0]}, --${key}: ${obj[key]}`
            } else {
                result.description += `-${key[0]}, --${key}: ${obj[key]}\n`
            }
        }
    }
    return result
}

console.log(flags({}));

// console.log(flags({
//   multiply: 'multiply the values',
//   divide: 'divides the values',
//   help: ['divide','multily']
// }));

console.log(flags({
      invert: 'inverts and object',
      'convert-map': 'converts the object to an array',
      assign: 'uses the function assign - assign to target object',
    }))
  


// {
//   alias: { h: 'help', m: 'multiply', d: 'divide'}
//   description: '-d, --divide: divides the values',
// }