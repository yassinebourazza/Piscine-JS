function addWeek(date) {
    const newSytem = [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
        "secondMonday",
        "secondTuesday",
        "secondWednesday",
        "secondThursday",
        "secondFriday",
        "secondSaturday",
        "secondSunday"
    ]
    const baseDate = new Date("0001-01-01")
    console.log(baseDate);
    
    let day = (date - baseDate)/1000/60/60/24
    console.log(day)
    
    return newSytem[day%14]
}
