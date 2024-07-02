document.addEventListener('DOMContentLoaded', () => {
    const greeting = document.getElementById('greeting');
    const additionalInfoForm = document.getElementById('additional-info-form');
    const infoInput = document.getElementById('info');
    const additionalInfoResult = document.getElementById('additional-info-result');
    const logoutButton = document.getElementById('logout-button');

    const username = localStorage.getItem('username');
    greeting.textContent = `Hola, ${username}. ¡Bienvenido al grupo secreto!`;

    additionalInfoForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const info = infoInput.value.trim();
        if (info) {
            additionalInfoResult.innerHTML = `<p>Información adicional: ${info}</p>`;
            infoInput.value = ''; // Limpiar el campo después de enviar
        }
    });

    logoutButton.addEventListener('click', () => {
        localStorage.removeItem('loggedIn');
        localStorage.removeItem('username');
        redirectTo('index.html');
    });

    function redirectTo(page) {
        window.location.assign(page);
    }
});