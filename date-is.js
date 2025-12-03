function isValid(date) {
    if (date instanceof Date && !Number.isNaN(date.getDate())) {
        return true
    }
    return false
}
function isAfter(date1,date2) {
    if (date1.getTime() > date2.getTime()) {
        return true
    }
    return false
}
const isBefore = (date1,date2) => !isAfter(date1,date2)
const isFuture = (date) => isAfter(date, new Date())
const isPast = (date) => isAfter(new Date(), date)
