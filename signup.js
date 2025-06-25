document.getElementById('signupForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const username = document.getElementById('newUsername').value;
    const password = document.getElementById('newPassword').value;
    localStorage.setItem('credentials', JSON.stringify({ username, password }));
    window.location.href = 'login.html';
});
