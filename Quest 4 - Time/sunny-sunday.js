function sunnySunday(date) {
    const baseDate = new Date('0001-01-01')
    const newWeek = ["Monday","Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    let deff =  (date - baseDate)/1000/60/60/24
    
    return newWeek[deff%6]
}

// console.log(sunnySunday(new Date('0001-01-01')));
// console.log(sunnySunday(new Date('0001-01-02')));
// console.log(sunnySunday(new Date('0001-01-03')));
// console.log(sunnySunday(new Date('0001-01-04')));
// console.log(sunnySunday(new Date('0001-01-05')));
// console.log(sunnySunday(new Date('0001-01-06')));
// console.log(sunnySunday(new Date('0001-01-07')));
// console.log(sunnySunday(new Date('0001-01-08')));
// console.log(sunnySunday(new Date('0001-01-09')));
