function flat(arr,num,count=0,res=[]) {
    for (let cur of arr) {
        if (Array.isArray(cur)) {
            res.push(...cur)
        } else {
            res.push(cur)
        }
    }
    count++
    if (num>count) {
        return flat(res,num,count)
    }
    return res

}
