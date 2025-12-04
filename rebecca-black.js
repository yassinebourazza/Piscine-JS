function isFriday(date) {    
    return date.getDay() == 5
}

function isWeekend(date) {
    return date.getDay() == 6
}

function  isLeapYear(date) {
    let year = date.getFullYear()
    return (year%4 == 0 &&year%100 != 0&&year%400 == 0 )
}

function isLastDayOfMonth(date) {
    let day = date.getDate() +1
    return (day == 0)
}