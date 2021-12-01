// To validate the name using the REGEX expression
const text = document.querySelector('#text');
const textError = document.querySelector('.text-error');
text.addEventListener('input', function() {
     let nameRegex = RegExp("^[A-Z]{1}[a-z]{2,}$");
     if(nameRegex.test(text.value)) textError.textContent = "";
     else textError.textContent = "Name is Incorrect";
});

// To validate the EmailId using the REGEX expression
const email = document.querySelector('#email');
const emailError = document.querySelector('.email-error');
email.addEventListener('input', function() {
    let emailRegex = RegExp("^[A-Z a-z 1-9]+([.][A-Z a-z 1-9]+)*@[A-Z a-z]{3,5}+.[a-z]{2,3}+([.][a-z]{2})*");
    if(emailRegex.test(email.value)) emailError.textContent = "";
    else emailError.textContent = "Email is Incorrect";
});

