document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // In a real application, you would send this data to a server for authentication
    console.log('Login attempt:', { username });
    alert('Login successful! (This is a demo, no actual authentication occurred)');
    this.reset();
    // Redirect to home page or dashboard
    window.location.href = 'index.html';
});