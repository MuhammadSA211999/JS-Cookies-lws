function setCookies(cname, cvalue, exDays) {
    const d = new Date();
    d.setTime(d.getTime() + (exDays * 24 * 60 * 60 * 1000));
    let expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookies(cname) {
    //name=muhammad sa;
    //  username=adeel fatih
    let name = cname + "="
    const ca = document.cookie.split(';')

    for (let i = 0; i < ca.length; i++) {
        // c is string 
        let c = ca[i]
        console.log(c);
        while (c.charAt(0) === ' ') {
            // 1/infinity space takle ta while loop kore bad deya hoyche
            // while space bad diye baki tuku return korbe 
            c = c.substring(1)
        }  // c= name=muhammad sa
        if (c.indexOf(name) === 0) {
            //return  muahmmad sa
            return c.substring(name.length)
        }
    }
    return ''
}

function checkCookie(name) {
    const cookie = getCookies(name)
    if (cookie != '') {
        alert(cookie)
    }
    else {
        const givenName = prompt('Please enter your company anme', '')
        if (givenName != null && givenName != "") {
            setCookies(name, givenName, 3)
        }
        else {
            alert('Cant create the cookie')
        }
    }

}
