function getNumber(number) {
    let sub = 1
    let result = 0
    while (number>=1) {
        number/=10
        sub*=10
    }
    sub = sub/10
    number *= sub*10
    while (number >= 1) {
        if (number > sub) {
            number-=sub
            result+=sub
        } else {
            sub/=10
        }
    }
    return result
}

function trunc(number) {
    let flag 
    if (number<0) {
        number= -number
        flag = true
    }
    return (flag) ? -getNumber(number) : getNumber(number);
}

function floor(number) {
    let flag 
    if(number < 0) {
        number = -number
        flag = true
    }
    return (flag) ? -getNumber(number)-1 : getNumber(number);
}

function ceil(number) {
    let flag 
    if(number < 0) {
        number = -number
        flag = true
    }
    return (flag) ? -getNumber(number) : getNumber(number)+1;
}

function round(number) {
    let flag 
    if(number < 0) {
        number = -number
        flag = true
    }
    if (number-getNumber(number) >= 0.5) {
        return (flag) ? -getNumber(number)-1 : getNumber(number)+1;
    }
    return (flag) ? -getNumber(number) : getNumber(number);
}
