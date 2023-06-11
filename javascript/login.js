//Script zum Einloggen auf der Website

const loginForm = document.getElementById('login-form-id');
loginForm.addEventListener('submit', (event) =>
{
event.preventDefault();
const userDataJson = localStorage.getItem('userData');
const userData = JSON.parse(userDataJson);
const usernameORemail_js = document.getElementById("usernameORemail").value;
const password_js = document.getElementById("password").value;

if (userData.password === password_js && userData.username || userData.email === usernameORemail_js) {
    // Weiterleitung auf die neue Seite
    window.location.href = "./start.html";
} 
else if (usernameORemail_js != usernameORemail) {
    alert("Falsche E-Mail-Adresse oder Benutzername");
} 
else if (password_js != password) {
    alert("Falsches Passwort");
} 
else {
    alert("Fehler bei Anmeldung");
}

});
