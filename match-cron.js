function matchCron(cron,date) {
    cron = cron.split(' ')
    let flag = 0
    if (cron[0] == '*' || date.getMinutes() == cron[0]) flag++
    if (cron[1] == '*' || date.getHours() == cron[1]) flag++
    if (cron[2] == '*' || date.getDate() == cron[2]) flag++
    if (cron[3] == '*' || date.getMonth()+1 == cron[3]) flag++
    if (cron[4] == '*' || date.getDay() == cron[4]) flag++    

    return (flag == 5)
}

