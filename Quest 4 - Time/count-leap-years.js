function countLeapYears(date) {
    let currentYear = date.getFullYear()
    let count = 0
    for (let i =1; i < currentYear;i++) {
        if (i%400 ==0 || (i%4==0 && i%100 != 0)) {            
            count++
        }
    }
    return count
}

