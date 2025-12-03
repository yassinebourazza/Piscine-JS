function isValid(date) {
    if (typeof date == 'number' && !Number.isNaN(date)) {
        // is Date.now()
        return true
    }
    if (date instanceof Date && !Number.isNaN(date.getDate())) {
        return true
    }
    return false
}
function isAfter(date1,date2) {
    if (date1 instanceof Date && date2 instanceof Date && date1.getTime() > date2.getTime()) {
        return true
    }
    return false
}
const isBefore = (date1,date2) => !isAfter(date1,date2)
const isFuture = (date) => isAfter(date, new Date())
const isPast = (date) => isAfter(new Date(), date)

console.log(isValid(new Date()));
console.log(isValid(Date.now()));
console.log(isValid(''));
console.log(isValid(123));
