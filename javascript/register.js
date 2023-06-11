//Code für:
//Einlesen der Eingabe bei Registrierung
//Speichern im File userdata.json

// Registrierungsformular
const registerForm = document.getElementById('register-form');
registerForm.addEventListener('submit', (event) => {
    event.preventDefault();

    // JSON-Objekt erstellen
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const repeatpassword = document.getElementById('repeat_password').value

    //Ist die Email einzigartig?
    if (!isEmailUnique(email)) {
        alert("Du besitzt bereits ein Konto");
        return;
    }
    //Enthält die Email ein @
    if (email.indexOf('@') === -1) 
    {
        alert("Die E-Mail-Adresse ist ungültig (Es fehlt ein @ in der E-Mail-Adresse)");
        return;
    }
    //Passwort und Passwortwiederholungsüberprüfung
    if (password != repeatpassword) 
    {
        alert("Passwort und/oder Passwortwiederholung stimmen nicht überein");
        return;
    }
    
    const userData = 
        {
         username: username, 
         email: email, 
         password: password, 
         repeat_password: repeatpassword
        };

    const userDataJson = JSON.stringify(userData);
    // JSON-Objekt in Local Storage speichern
    localStorage.setItem('userData', userDataJson);
    window.location.href = "./login.html";
});

// Funktion zur Überprüfung doppelter Emails:
function isEmailUnique(email) 
{
    const userDataJson = localStorage.getItem('userData');
    if (userDataJson) 
    {
        const userData = JSON.parse(userDataJson);
        if (userData.email === email) 
        {
            return false; // E-Mail ist bereits vorhanden
        }
    }
    return true; // E-Mail ist einzigartig
}

