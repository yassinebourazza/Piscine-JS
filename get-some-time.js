function firstDayWeek(weeks,year) {    
    let date = new Date(Date.UTC(year,0,1))
    if (weeks > 1) {
        date.setDate(((weeks-1)*7)-date.getDate())
    }
    day = date.getDate() + ''
    mouth = date.getMonth() + ''
    year = date.getFullYear() + ''

    return day.padStart(2,'0') + '-' + mouth.padStart(2,'0') + '-' + year.padStart(4, '0')
}
console.log(firstDayWeek(1, 1000))
