document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('login-form');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const loginMessage = document.getElementById('login-message');

    const validUsername = 'pepe'; 
    const validPassword = '123'; 

    let loginAttempts = 0; 

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const username = usernameInput.value;
        const password = passwordInput.value;

        if (username === validUsername && password === validPassword) {
            localStorage.setItem('loggedIn', 'true');
            localStorage.setItem('username', username);
            redirectTo('welcome.html');
        } else {
            loginAttempts++;
            if (loginAttempts >= 2) {
                redirectTo('warning.html');
            } else {
                loginMessage.innerHTML = '<p>Usuario o contraseña incorrectos. Inténtalo de nuevo.</p>';
            }
        }
    });

    function redirectTo(page) {
        window.location.assign(page);
    }
});