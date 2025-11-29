function nasa(number) {
    let str= ""
    for (let i =0 ; i < number;i++) {
        if (i%3==0 && i%5==0) {
            str += "NA "
        } else if (i%3==0 ) {
            str += "SA "
        } else if (i%5==0) {
            str += "NASA "
        }
    }
    return str.slice(0,-1)
}
