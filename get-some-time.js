function firstDayWeek(weeks,year) {    
    let date = new Date(year,0,1)
    date.setUTCFullYear(year)
    date.setUTCDate(weeks*7)
    date.setUTCDate((weeks*7)-date.getDay()+1)    
        
    return date.getUTCDate()+'-'+(date.getUTCMonth()+1)+'-'+date.getUTCFullYear()
}


console.log(firstDayWeek(1, 2000));
