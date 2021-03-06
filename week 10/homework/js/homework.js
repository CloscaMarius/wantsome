
const validation = () => {
    let username = document.getElementById('username').value;
    let usernameErr = document.getElementById('usernameErr');

    //var reg = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{4,}$/;
    var reg = /^[0-9a-zA-Z]{4,}$/;
    if (!username.match(reg)) {
        usernameErr.style.display = 'block';
    } else {
        usernameErr.style.display = 'none';
    }

    let email = document.getElementById('email').value;
    let emailErr = document.getElementById('emailErr');
    var reg = /\S+@\S+\.\S+/;
    if (!email.match(reg)) {
        emailErr.style.display = 'block';
    } else {
        emailErr.style.display = 'none';
    }

    let firstname = document.getElementById('firstname').value;
    let firstnameErr = document.getElementById('firstnameErr');
    var reg = /^[a-zA-Z ]{2,30}$/;
    if (!firstname.match(reg)) {
        firstnameErr.style.display = 'block';
    } else {
        firstnameErr.style.display = 'none';
    }

    let lastname = document.getElementById('lastname').value;
    let lastnameErr = document.getElementById('lastnameErr');
    var reg = /^[a-zA-Z ]{2,30}$/;
    if (!lastname.match(reg)) {
        lastnameErr.style.display = 'block';
    } else {
        lastnameErr.style.display = 'none';
    }

    let phone = document.getElementById('phone').value;
    let phoneErr = document.getElementById('phoneErr');
    var reg = /^\d{10}$/;
    if (!phone.match(reg)) {
        phoneErr.style.display = 'block';
    } else {
        phoneErr.style.display = 'none';
    }

}


const button = document.getElementById('button');
button.addEventListener('click', validation);


