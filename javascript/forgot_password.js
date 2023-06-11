document.getElementById("forgot-password-form").addEventListener("submit", function(event) 
{
    event.preventDefault();

    // test ob email oder username im local storage vorhanden ist
    var usernameORemail = document.getElementById("username_email").value;
    const userDataJson = localStorage.getItem('userData');
    const userData = JSON.parse(userDataJson);
    
    if (userData.password == usernameORemail || userData.email == usernameORemail) 
    {
        window.location.href = "./neues-passwort.html";
    } 
    else {
        alert("Die eingegebene E-Mail-Adresse oder der Benutzername ist nicht vorhanden.");
        return;
    }
});
