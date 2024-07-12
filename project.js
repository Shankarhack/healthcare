document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Simple client-side authentication
    if (username === 'admin' && password === 'password') {
        alert('Login successful');
        window.location.href = 'project.html'; // Redirect to the home page
    } else {
        document.getElementById('error').textContent = 'Invalid username or password';
    }
});
