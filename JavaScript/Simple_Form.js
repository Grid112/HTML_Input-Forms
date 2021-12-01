// To validate name using the REGEX expression
const text = document.querySelector('#text');
const textError = document.querySelector('.text-error');
text.addEventListener('input', function() {
     let nameRegex = RegExp("^[A-Z]{1}[a-z]{2,}$");
     if(nameRegex.test(text.value)) textError.textContent = "";
     else textError.textContent = "Name is Incorrect";
});

// To validate EmailId using the REGEX expression
const email = document.querySelector('#email');
const emailError = document.querySelector('.email-error');
email.addEventListener('input', function() {
    let emailRegex = RegExp("^[A-Z a-z 1-9]+([.][A-Z a-z 1-9]+)*@[A-Z a-z]{3,5}+.[a-z]{2,3}+([.][a-z]{2})*");
    if(emailRegex.test(email.value)) emailError.textContent = "";
    else emailError.textContent = "Email is Incorrect";
});

// To validate Number using the REGEX expression
const number = document.querySelector('#number');
const numberError = document.querySelector('.number-error');
number.addEventListener('input', function(){
       let numberRegex = RegExp("^[0-9]{2}\\s[0-9]{10}$");
       if(numberRegex.test(number.value)) numberError.textContent = "";
       else numberError.textContent = "Number is Incorrect";
   });

// To validate Password using the REGEX expression
const password = document.querySelector('#password');
const passwordError = document.querySelector('.password-error');
password.addEventListener('input', function(){
    let passwordRegex = RegExp("^[A-Z]{1,}[A-Z a-z]{8,}[!@#$%^*_+=]{1}[0-9]{1,}$");
    if(passwordRegex.test(password.value)) passwordError.textContent = "";
    else passwordError.textContent = "Password is Incorrect";
});

// For Salary Scroller
const salary = document.querySelector('#salary');
const output = document.querySelector('.salary-output');
output.textContent = salary.value;
salary.addEventListener('input', function() {
     output.textContent = salary.value;
});

