document.querySelector('.join-form button').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent form submission (you can remove this line for actual submission)
    
    // Basic validation for input fields (example)
    const email = document.querySelector('.join-form input[type="email"]').value;
    const password = document.querySelector('.join-form input[type="password"]').value;
    
    if (!email || !password) {
        showCustomAlert("Please fill in all fields.");
    } else {
        showCustomAlert("Form submitted successfully!");
        // Here you can trigger actual form submission or other actions
    }
});

function showCustomAlert(message) {
    const alertMessage = document.getElementById('alert-message');
    const customAlert = document.getElementById('custom-alert');
    
    alertMessage.textContent = message;
    customAlert.style.display = 'flex';
    
    document.getElementById('alert-close').addEventListener('click', function() {
        customAlert.style.display = 'none';
    });
}

// Event listener for the "Login" button
document.querySelector('.auth-buttons .login').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default action
    window.location.href = 'login.html'; // Redirect to login page (modify URL as necessary)
});

// Event listener for the "Sign Up" button
document.querySelector('.auth-buttons .sign-up').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default action
    window.location.href = 'signup.html'; // Redirect to sign-up page (modify URL as necessary)
});
