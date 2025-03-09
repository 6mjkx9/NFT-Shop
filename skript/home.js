 // Check if user is logged in (this is a simplified version, in a real app you'd use server-side sessions)
 let isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';

 const loginBtn = document.getElementById('loginBtn');
 const logoutBtn = document.getElementById('logoutBtn');

 function updateLoginState() {
     if (isLoggedIn) {
         loginBtn.style.display = 'none';
         logoutBtn.style.display = 'inline-block';
     } else {
         loginBtn.style.display = 'inline-block';
         logoutBtn.style.display = 'none';
     }
 }

 loginBtn.addEventListener('click', () => {
     window.location.href = 'login.html';
 });

 logoutBtn.addEventListener('click', () => {
     isLoggedIn = false;
     localStorage.setItem('isLoggedIn', 'false');
     updateLoginState();
     alert('You have been logged out.');
 });

 // Initial state update
 updateLoginState();