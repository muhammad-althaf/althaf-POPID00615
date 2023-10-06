const registrationForm = document.getElementById('registrationForm');
const usernameInput = document.getElementById('username');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const usernameError = document.getElementById('usernameError');
const emailError = document.getElementById('emailError');
const passwordError = document.getElementById('passwordError');

registrationForm.addEventListener('submit', function (e) {

    e.preventDefault();

    
    clearErrorMessages();

   
    const username = usernameInput.value.trim();
    const email = emailInput.value.trim();
    const password = passwordInput.value;

    let isValid = true;

    if (username === '') {
        isValid = false;
        showError(usernameError, 'Username is required');
    }

    if (!isValidEmail(email)) {
        isValid = false;
        showError(emailError, 'Invalid email address');
    }

    if (password === '') {
        isValid = false;
        showError(passwordError, 'Password is required');
    } else if (password.length < 6) {
        isValid = false;
        showError(passwordError, 'Password must be at least 6 characters');
    }

  
    if (isValid) {
        alert('Registration successful!');
        registrationForm.reset();
    }
});

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function showError(element, message) {
    element.textContent = message;
}

function clearErrorMessages() {
    usernameError.textContent = '';
    emailError.textContent = '';
    passwordError.textContent = '';
}
