function isValid(date) {
    if (date.toString() == 'Invalid Date') {
        return false
    }
    return true
}
function isAfter(date1,date2) {
     if (date1.toString() == 'Invalid Date' && date2.toString() == 'Invalid Date') {
        return false
    }
    if (date1 > date2) {
        return true
    }
}
function isBefore(date1,date2) {
     if (date1.toString() == 'Invalid Date' && date2.toString() == 'Invalid Date') {
        return false
    }
    if (date1 < date2) {
        return true
    }
  
}
const isFuture = (date) => {
    const now = new Date()
    if (date.toString() == 'Invalid Date') {
        return false
    }
    if (date > now) {
        return true
    }
   
}
function isPast(date) {
      const now = new Date()
    if (date.toString() == 'Invalid Date') {
        return false
    }
    if (date < now) {
        return true
    }
}
