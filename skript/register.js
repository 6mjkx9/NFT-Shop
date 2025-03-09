document.getElementById('registerForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    if (password !== confirmPassword) {
        alert('Passwords do not match');
        return;
    }
    // In a real application, you would send this data to a server
    console.log('New user registered:', { username, email });
    alert('Registration successful! (This is a demo, no actual account was created)');
    this.reset();
});