function setCookie(cname, cvalue, exdays) {
    const date = new Date()
    //convert the date to mili-second 
    date.setTime(date.getTime() + exdays * 24 * 60 * 60 * 1000)
    let expires = `expires=${date.toUTCString()}`
    document.cookie = `${cname = cvalue};${expires};path=/`
}