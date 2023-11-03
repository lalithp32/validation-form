var nameErr = document.getElementById("name-error");
var phoneErr = document.getElementById("tel-error");
var emailErr = document.getElementById("email-error");
var messgaeErr = document.getElementById("msg-error");
var submitErr = document.getElementById("sub-error");


function validateName() {
    var name = document.getElementById("name-val").value;

    if (name.length == 0) {
        nameErr.innerHTML = "Name Required";
        return false;
    }
    if (!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
        nameErr.innerHTML = "Please Enter Full Name";
        return false;
    }
    nameErr.innerHTML = '<i>Valid</i>';
    return true;
}

function validateTel() {
    var tel = document.getElementById("tel-val").value;

    if (tel.length == 0) {
        phoneErr.innerHTML = "Phone No. Required";
        return false;
    }
    if (tel.length > 10) {
        phoneErr.innerHTML = "More Than 10 Digits";
        return false;
    }
    if (tel.length < 10) {
        phoneErr.innerHTML = "Less Than 10 Digits";
        return false;
    }
    if (!tel.match(/^[0-9]{10}$/)) {
        phoneErr.innerHTML = 'Digits Only';
        return false;
    }
    phoneErr.innerHTML = '<i>Valid</i>';
    return true;
}

function validateEmail() {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    let email = document.getElementById("email-val").value;
    if (email.length == 0) {
        emailErr.innerHTML = "Email Required";
        return false;
    }
    if (!email.match(emailRegex)) {
        emailErr.innerHTML = "Wrong Email";
        return false;
    } else {
        emailErr.innerHTML = '<i>Valid</i>';
        return true;

    }
}
function validateMsg() {
    var Msg = document.getElementById("msg-val").value;
    var req = 30;
    var left = req - Msg.length;
    if (left > 0) {
        messgaeErr.innerHTML = left + " " + "more character required"
    } else {
        messgaeErr.innerHTML = "<i>valid</i>"
        return true;
    }

}
function validateSubmit() {
    if (!validateName() || validateTel() || validateEmail() || validateMsg()) {
        submitErr.innerHTML = "Please Check Errors"
        submitErr.style.display = "block";
        setTimeout(function () {
            submitErr.style.display = "none";
        }, 3000)
    }
}

