function isValid(date) {
    if (typeof date === 'string') {
        return false
    }
    date = new Date(date)
    if (date.toString() == 'Invalid Date') {
        return false
    }
    return true
}
function isAfter(date1,date2) {
     if (!isValid(date1) ||!isValid(date2) ) {
        return false
    }
    if (date1 > date2) {
        return true
    }
}
function isBefore(date1,date2) {
      if (!isValid(date1) || !isValid(date2)) {
        return false
    }
    if (date1 < date2) {
        return true
    }
  
}
const isFuture = (date) => {
    const now = new Date()
      if (!isValid(date)) {
        return false
    }
    if (date > now) {
        return true
    }
   
}
function isPast(date) {
    const now = new Date()
     if (!isValid(date)) {
        return false
    }
    if (date < now) {
        return true
    }
}

