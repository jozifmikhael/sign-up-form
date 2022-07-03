// Get form and input elements by ID
const form = document.getElementById('form');
const firstName = document.getElementById('first_name');
const lastName = document.getElementById('last_name');
const email = document.getElementById('email');
const number = document.getElementById('phone_number');
const password = document.getElementById('password');
const password2 = document.getElementById('password_check');

form.addEventListener('submit', e => {

    e.preventDefault();
    checkInputs();
});

function checkInputs(){
    // get values from the inputs
    const firstNameValue = firstName.value.trim();
    const lastNameValue = lastName.value.trim();
    const emailValue = email.value.trim();
    const numberValue = number.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();

    // first name checks
    if (firstNameValue === ''){
        setErrorFor(firstName, 'First name cannot be blank');
    } else {
        setSuccessFor(firstName);
    }

    // last name checks
    if (lastNameValue === ''){
        setErrorFor(lastName, 'Last name cannot be blank');
    } else {
        setSuccessFor(lastName);
    }

    // email checks
    if (emailValue === ''){
        setErrorFor(email, 'Email cannot be blank');
    } else if (!isEmail(emailValue)){
        setErrorFor(email, 'Email is not valid');
    } else {
        setSuccessFor(email);
    }

    // number checks
    if (numberValue === ''){
        setErrorFor(number, 'Number cannot be blank');
    } else if (!isNumber(numberValue)){
        setErrorFor(number, 'Number is not valid');
    } else setSuccessFor(number);

    // password checks
    if (passwordValue === ''){
        setErrorFor(password, 'Password cannot be blank');
    } else if (!isPassword(passwordValue)){
        setErrorForPassword(password, 'Password is not valid, must contain one upper case letter, one lower case letter, atleast one digit, atleast one special character, and minimum of 8 characters');
    } else {
        setSuccessFor(password);
    }

    if (password2Value === ''){
        setErrorFor(password2, 'Password cannot be blank');
    } else if (passwordValue !== password2Value){
        setErrorFor(password2, 'Passwords do not match');
    } else {
        setSuccessFor(password2);
    }
}

// takes input element and displays error 
function setErrorFor(input, message){
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    small.innerText = message;
    formControl.className = 'form-control error';
}

// takes password input element and password constrains message and
// displays password constraints if password is not valid 
function setErrorForPassword(input, message){
    const formControl = input.parentElement;
    const para = formControl.querySelector('p');
    const small = formControl.querySelector('small');
    small.innerText = 'Password is not valid';
    para.innerText = message;
    formControl.className = 'form-control error';
}
// takes input element and displays success
function setSuccessFor(input){
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

let emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
function isEmail(email){
    return emailRegex.test(email);
}

let numberRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
function isNumber(number){
    return numberRegex.test(number);
}

let passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&.])[A-Za-z\d@$!%*?&.]{8,}$/;
function isPassword(password){
    return passwordRegex.test(password);
}