function dayOfTheYear(date) {
    let year = date.getFullYear()
    if (date.getFullYear()<1000) {
        year = date.getFullYear()+1
    }
    year = year.toString().padStart(4,'0')
    
    let format = year + '-01-01' 
    let theFisrtDay = new Date(format)    

    return(date-theFisrtDay)/1000/60/60/24 + 1
}
console.log(dayOfTheYear(new Date('00001-01-01'))); 
