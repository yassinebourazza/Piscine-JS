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
    if (typeof date1 == 'number' && !Number.isNaN(date1) && date1 > date2) {        
        // is Date.now()
        return true
    }
    if (date1 instanceof Date && date2 instanceof Date && date1.getTime() > date2.getTime()) {
        return true
    }
    
    return false
}
function isBefore(date1,date2) {
     if (typeof date1 == 'number' && !Number.isNaN(date1) && date1 < date2) {        
        // is Date.now()
        return true
    }
    if (date1 instanceof Date && date2 instanceof Date && date1.getTime() < date2.getTime()) {
        return true
    }
    return false
}
const isFuture = (date) => {
    const now = new Date()
    
    if (typeof date == 'number' && !Number.isNaN(date) && date > 0) {        
        // is Date.now()
        return true
    }
    if (date instanceof Date && date.getTime() > now.getTime()) {
        return true
    }
    return false
}
function isPast(date) {
    const now = new Date()
    
    if (typeof date == 'number' && !Number.isNaN(date) && date < 0) {        
        // is Date.now()
        return true
    }
    if (date instanceof Date && date.getTime() < now.getTime()) {
        return true
    }
    return false
}

