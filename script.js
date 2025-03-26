const correctPassword = '&mdpHEHE'; // Le mot de passe
const encryptedInfo = 'U2FsdGVkX19KxX6sOZL3+5nWl6H9Z1Y='; // Informations

// Fonction pour décrypter les informations
function decryptInfo(encryptedText, password) {
    return CryptoJS.AES.decrypt(encryptedText, password).toString(CryptoJS.enc.Utf8);
}

// Fonction pour vérifie le mot de passe
function checkPassword() {
    const password = document.getElementById('password').value;
    if (password === correctPassword) {
        const decryptedInfo = decryptInfo(encryptedInfo, password);
        document.getElementById('secret-info').innerHTML = decryptInfo;
        document.getElementById('login-container').style.display = 'none';
        document.getElementById('content-container').style.display = 'block';
    } else {
        document.getElementById('error-message').innerText = 'Mot de passe incorrect, veuillez réessayer.';
    }
}
