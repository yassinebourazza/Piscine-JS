function sunnySunday(date) {
    const baseDate = new Date('0001-01-01')
    const newWeek = ["Monday","Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    let deff =  (date - baseDate)/1000/60/60/24
    
    return newWeek[deff%6]
}
