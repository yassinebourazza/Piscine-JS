function firstDayWeek(weeks,year) {  
    let format = year + '-01-01'
    let date = new Date(format)
    let dayOfWeek = date.getDay()
    if (dayOfWeek ==0) {
        dayOfWeek+=7
    }
    date.setDate(date.getDate()-(dayOfWeek-1) + (weeks-1)*7)
    
    let dd = date.getDate() + ''
    let mm = date.getMonth() + 1 + ''
    let yyyy = date.getFullYear() + ''  
    
    if (date.getFullYear() < year) {     
    return '01-01-' + year
    }
   
    return dd.padStart(2,'0') + '-' + mm.padStart(2,'0') + '-' + yyyy.padStart(4, '0')
}
console.log(firstDayWeek(1,'0001'));
console.log(firstDayWeek(2, '2017')); // '02-01-2017' expected

