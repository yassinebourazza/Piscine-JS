function chunk(arr,num) {
    let start = 0
    let add2D = []
    for (let index in arr) {
        if (index!=0&&index%num == 0) {
            add2D.push(arr.slice(start,index))
            start = index
        }
    }
    add2D.push(arr.slice(start))
    return add2D
}




