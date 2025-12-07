function flat(arr,num,count=0,res=[]) {
    let flag = 0
    for (let cur of arr) {
        if (Array.isArray(cur)) {
            res.push(...cur)
            flag++
        } else {
            res.push(cur)
        }
    }

    count++
    if (num>count && flag!= 0) {
        return flat(res,num,count)
    }
    return res

}


