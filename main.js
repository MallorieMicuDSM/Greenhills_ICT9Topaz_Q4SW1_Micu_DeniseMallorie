function user_identity() {
    let username = (document.getElementById('user').value);
    let password = (document.getElementById('pwd').value);

    if (username == 'mallorie1013' && password == 'ilovestrawberries'){
        window.alert('Welcome mallorie1013!')
    } //both variables should be correct in order for window alert to appear as this

    else {
        window.alert('Incorrect username/password! Try again.')
    }// if one or neither variables are correct, then this window alert will appear
}


