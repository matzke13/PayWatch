//Script zum neues Passwort auf der Website
document.getElementById("new-password-form").addEventListener("submit", function(event) 
{
    event.preventDefault();

    // Überprüft, ob die eingegebene E-Mail-Adresse oder der Benutzername im Local Storage vorhanden ist
    var new_password = document.getElementById("newPassword").value;
    var new_password_repeat = document.getElementById("newPasswordRepeat").value;

    const userDataJson = localStorage.getItem('userData');
    const userData = JSON.parse(userDataJson);

    // Überprüfen, ob die Passwörter übereinstimmen
    if (new_password != new_password_repeat) {
        alert("Die eingegebenen Passwörter stimmen nicht überein. Bitte versuchen Sie es erneut.");
        return;
    }

    // Speichern des neuen Passworts im Local Storage
    userData.password = new_password;
    userData.repeat_password = new_password;
    localStorage.setItem('userData', JSON.stringify(userData));

    window.location.href = "./index.html";

});

