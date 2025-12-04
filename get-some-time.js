function firstDayWeek(weeks,year) {    
    let date = new Date(year,0,1)
    let dayOfWeek = date.getDay()
    date.setDate(date.getDate()-dayOfWeek+1 + ((weeks-1)*7))
    
    dd = date.getDate() + ''
    mm = date.getMonth() + 1 + ''
    yyyy = date.getFullYear() + ''  
    
    if (date.getFullYear() < year) {
    dd = '01'
    mm = '01'
    yyyy = year+ ''      
    return dd.padStart(2,'0') + '-' + mm.padStart(2,'0') + '-' + yyyy.padStart(4, '0')
    }
   
    return dd.padStart(2,'0') + '-' + mm.padStart(2,'0') + '-' + yyyy.padStart(4, '0')
}
