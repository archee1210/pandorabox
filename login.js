document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const saved = JSON.parse(localStorage.getItem('credentials'));
    const defaultUser = username === 'user' && password === 'password';
    const storedUser = saved && username === saved.username && password === saved.password;

    if (defaultUser || storedUser) {
        localStorage.setItem('loggedIn', 'true');
        window.location.href = 'index.html';
    } else {
        document.getElementById('error').classList.remove('hidden');
    }
});
