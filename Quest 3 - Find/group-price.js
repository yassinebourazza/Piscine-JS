function groupPrice(str) {
    str = str.match(/(USD|\$)\d+\.\d+/g)
    if (!str) return []
    
    let result = []
    for (let s of str) {        
        result.push([''+s.match(/(.+)/g),''+s.match(/(\d+(?=.\d+))/g),''+s.match(/(?<=\d+.)(\d+)/g)])
    }
    return result 
}


