function validation () {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const password2 = document.getElementById('password2').value;
    const error = document.getElementById('error');
    const emailReg = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!emailReg.test(email)) {
        error.innerText = 'Wrong email';
        return false
    }
    if (password.length < 6) {
        error.innerText = 'Password field should have at least 6 symbols';
        return false
    }
    if (password !== password2) {
        error.innerText = 'Password fields should be equal';
        return false
    }
    return true;
}

$('#content').css({
    width: windowWidth,
    height: windowHeight
});