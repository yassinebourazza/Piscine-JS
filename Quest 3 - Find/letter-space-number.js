function letterSpaceNumber(str) {
    return (str.match(/[a-z]\s\d(?!\w)/ig) || [])
}
