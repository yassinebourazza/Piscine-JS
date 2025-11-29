function findexpression(num) {
    let compare = 1
    while(compare<num) {
        if (compare*2 < num) {
            compare*=2
        } else {
            compare+=4
        }        
    }
    if (compare!=num) {
        return undefined
    }
    return compare
}
