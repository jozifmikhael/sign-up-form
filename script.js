// Get form and input elements by ID
const form = document.getElementById('form');
const firstName = document.getElementById('first_name');
const lastName = document.getElementById('last_name');
const email = document.getElementById('email');
const number = document.getElementById('phone_number');
const password = document.getElementById('password');
const password2 = document.getElementById('password_check');
const inputs = document.querySelectorAll('input');


form.addEventListener('submit', e => {

    e.preventDefault();
    checkInputs();
});


// Check which input is being sent and validate using switch statement
function checkInputType(event){
    if (event.target.id === 'first_name'){
        firstNameCheck();
    } else if (event.target.id === 'last_name'){
        lastNameCheck();
    } else if (event.target.id === 'email'){
        emailCheck()
    } else if (event.target.id === 'phone_number'){
        phoneNumberCheck()
    } else if (event.target.id === 'password'){
        passwordCheck();
    } else if (event.target.id === 'password_check'){
        password2Check();
    }
}


// add event listener for each input in DOM
inputs.forEach(input => {
    input.addEventListener('input', event => {
        checkInputType(event);
    });
});

function checkInputs(){
    inputs.forEach(input => {
        if (input.parentElement.className.includes('success')){
            let successPara = document.querySelector('.form-result');
            successPara.className = 'form-result success'
        }
    });
}

function firstNameCheck(){
    // first name checks
    const firstNameValue = firstName.value.trim();
    if (firstNameValue === ''){
        setErrorFor(firstName, 'First name cannot be blank');
    
    }else if (firstNameValue.length < 2){
        setErrorFor(firstName, 'First name must be longer');
    }
    else {
        setSuccessFor(firstName);
    }
}

function lastNameCheck(){
    // last name checks
    const lastNameValue = lastName.value.trim();
    if (lastNameValue === ''){
        setErrorFor(lastName, 'Last name cannot be blank');
    } else if (lastNameValue.length < 2) {
        setErrorFor(lastName, 'Last name too short');
    }
    else {
        setSuccessFor(lastName);
    }
}

function emailCheck(){
    // email checks
    const emailValue = email.value.trim();
    if (emailValue === ''){
        setErrorFor(email, 'Email cannot be blank');
    } else if (!isEmail(emailValue)){
        setErrorFor(email, 'Email is not valid');
    } else {
        setSuccessFor(email);
    }

}

function phoneNumberCheck(){
    const numberValue = number.value.trim();
    // number checks
    if (numberValue === ''){
        setErrorFor(number, 'Number cannot be blank');
    } else if (!isNumber(numberValue)){
        setErrorFor(number, 'Number is not valid');
    } else setSuccessFor(number);
}

function passwordCheck(){
    const password2Value = password2.value.trim();
    const passwordValue = password.value.trim();
    // password checks
    if (passwordValue === ''){
        setErrorFor(password, 'Password cannot be blank');
    } else if (!isPassword(passwordValue)){
        setErrorForPassword(password, 'Password is not valid');
    } else {
        setSuccessFor(password);
    }
    if (passwordValue !== password2Value){
        setErrorFor(password2, 'Passwords do not match');
    } else setSuccessFor(password2);
}

function password2Check(){
    const password2Value = password2.value.trim();
    const passwordValue = password.value.trim();
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
    const small = formControl.querySelector('small');
    small.innerText = message;
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