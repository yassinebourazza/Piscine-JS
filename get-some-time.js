function firstDayWeek(weeks,year) {  
    format = year + '-01-01'
    let date = new Date(format)
    let dayOfWeek = date.getDay()
    date.setDate(date.getDate()-dayOfWeek+1 + ((weeks-1)*7))
    
    let dd = date.getDate() + ''
    let mm = date.getMonth() + 1 + ''
    let yyyy = date.getFullYear() + ''  
    
    if (date.getFullYear() < year) {
    dd = '01'
    mm = '01'
    yyyy = year+ ''      
    return dd.padStart(2,'0') + '-' + mm.padStart(2,'0') + '-' + yyyy.padStart(4, '0')
    }
   
    return dd.padStart(2,'0') + '-' + mm.padStart(2,'0') + '-' + yyyy.padStart(4, '0')
}
console.log(firstDayWeek(1,'0001'));
