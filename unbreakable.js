function split(str,spliter) {
    let startFlag =0
    let endFlag = 0
    let result = []
    let spliterLength = spliter.length
    
    for (let i = 0; i< str.length;i++) {
        if (i==0 && str.slice(i,i+spliterLength)==spliter) {
            startFlag = i+spliterLength
        }
        if (i!=0 && str.slice(i,i+spliterLength)==spliter) {
            endFlag = i
            result.push(str.slice(startFlag,endFlag))
            startFlag = i+spliterLength
        } 
    }
    if (str[str.length-1] !== " ") {
        result.push(str.slice(startFlag))
    }

    return result
}

function join(arr,joiner=',') {
    let str = ""
    for (let key of arr) {
        str += key + joiner
    }
    return str.slice(0,-1)
}
