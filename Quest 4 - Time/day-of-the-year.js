function dayOfTheYear(date) {
    let year = date.getUTCFullYear()
    year = year.toString().padStart(4,'0')
    let format = year + '-01-01' 
    let theFisrtDay = new Date(format)   
    
    return(date-theFisrtDay)/1000/60/60/24 + 1
}