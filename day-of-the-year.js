function dayOfTheYear(date) {
    let format = date.getFullYear() + '-01-01' 
    let theFisrtDay = new Date(format)

    return(date-theFisrtDay)/1000/60/60/24 + 1
}
console.log(dayOfTheYear(new Date('2000-01-01'))); 
