function split(str,spliter) {
    let startFlag =0
    let result = []
    let spliterLength = spliter.length
    
    for (let i = 0; i<= str.length-spliterLength;i++) {
        if (str.slice(i,i+spliterLength)==spliter) {        
                result.push(str.slice(startFlag,i))
                startFlag = i+spliterLength
                i += spliterLength-1 
        } 
    }
    result.push(str.slice(startFlag))

    return result
}

function join(arr,joiner=',') {
    let str = ""
    for (let key of arr) {
        str += key + joiner
    }
    return str.slice(0,-joiner.length)
}

