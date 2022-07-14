const form = document.getElementById('myForm');
const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const email = document.getElementById('email');
const password = document.getElementById('password');

form.addEventListener("submit", (e) => {
    e.preventDefault();
    
    checkInputs();
})

function checkInputs(){
    //get values
    const firstNameValue = firstName.value.trim();
    const lastNameValue = lastName.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();

    if(firstNameValue === ''){
        setErrorFor(firstName, 'First Name cannot be empty')
    }else {
        setSuccessFor(firstName);
    }
    if(lastNameValue === ''){
        setErrorFor(lastName, 'Last Name cannot be empty')
    } else{
        setSuccessFor(lastName);
    }

    if(emailValue === ''){
        setErrorFor(email, 'Looks like this is not an email')
        email.placeholder = "email@example/com"
        email.classList.add('red');
    } else if(!isEmail(emailValue)){
        setErrorFor(email, 'Email is not valid');
    } else{
        setSuccessFor(email);
    }

    if(passwordValue === ''){
        setErrorFor(password, 'Password cannot be empty')
    } else{
        setSuccessFor(password);
    }
}

function setErrorFor(input, message){
    const formInput = input.parentElement;
    const errorIcon = formInput.querySelector('svg');
    const errorText = formInput.querySelector('small');
    input.style.border = "2px solid var(--red)";
    errorText.textContent = message;
    errorIcon.style.visibility = "visible";
}

function setSuccessFor(input){
    const formInput = input.parentElement;
    const errorIcon = formInput.querySelector('svg');
    const errorText = formInput.querySelector('small');
    input.style.border = "2px solid var(--green)";
    errorText.textContent = "";
    errorIcon.style.visibility = "hidden";
}

function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}