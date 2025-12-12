function neuron(arr) {
    for (let str=0 ; str<arr.length; str++) {
        arr[str] = arr[str].match(/[^-:]+/g)
    }
    let result= {}
    for (let str of arr) {
        // console.log(str);
        str[0] = str[0].toLowerCase()
        str[1] = str[1].trim()
        str[3] = str[3].trim()
        if (result[str[0]]==undefined) {
            result[str[0]] = {}
        } 
        if (result[str[0]][str[1].toLowerCase().replace(' ','_')]== undefined) {
            result[str[0]][str[1].toLowerCase().replace(' ','_')] = {question: str[1] , responses : [str[3]]}
            continue
        }
        result[str[0]][str[1].toLowerCase().replace(' ','_')].responses.push(str[3])
        
    }
    // console.log(result.questions);
    // console.log(result.orders);
    
    return result
    
}

// console.log(neuron([ 'Questions: what is ounces? - Response: Ounce, unit of weight in the avoirdupois system',
//   'Questions: what is ounces? - Response: equal to 1/16 pound (437 1/2 grains)',
//   'Questions: what is Mud dauber - Response: Mud dauber is a name commonly applied to a number of wasps',
//   'Orders: shutdown! - Response: Yes Sr!',
//   'Orders: Quote something! - Response: Pursue what catches your heart, not what catches your eyes.']))