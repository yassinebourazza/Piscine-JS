function isFriday(date) {    
    return date.getDay() == 5
}

function isWeekend(date) {
    return date.getDay() == 6
}

function  leapYear(date) {
    year = date.getFullYear()
    return (year%4 == 0 &&year%100 != 0&&year%400 == 0 )
}

function isLastDayOfMonth(date) {
    day = date.getDate() +1
    return (day == 0)
}