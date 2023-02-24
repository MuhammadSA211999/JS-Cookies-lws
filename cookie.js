function setCookes(cname, cvalue, cexpDays) {
    let date = new Date()
    // setTime Date format set kore
    date.setTime(date.getDate()) + cexpDays * 24 * 60 * 60 * 1000
    let expires = 'expires' + '=' + date.toUTCString()
    document.setCookie = cname + "=" + cvalue + ";" + expires + ";path=/"
}

function getCookies() {

}