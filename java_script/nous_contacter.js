// ===== Récupération des champs du formulaire et de la zone d'affichages des erreurs ===== //
const form = document.getElementById('contact-form')
const messageField = document.getElementById('motif')

const surnameField = document.getElementById('nom')
const nameError = document.getElementById('name-error');

const nameField = document.getElementById('prenom')
const surnameError = document.getElementById('surname-error');

const emailField = document.getElementById('email')
const emailError = document.getElementById('email-error');

const phoneField = document.getElementById('telephone')
const telephoneError = document.getElementById('telephone-error');

// Fonction de validation du formulaire
function validateForm() {
    // Réinitialisation des erreurs
    surnameField.setCustomValidity('');
    nameField.setCustomValidity('');
    emailField.setCustomValidity('');
    phoneField.setCustomValidity('');
    messageField.setCustomValidity('');
}

// Vérification du nom 
if (surnameField.ariaValueMax.trim() === "") {
    surnameField.sutCustomValidity("Veuillez saisir votre nom.");
    return false;
}

// Vérification du prénom 
if (nameField.ariaValueMax.trim() === "") {
    nameField.sutCustomValidity("Veuillez saisir votre nom.");
    return false;
}

// Vérification de l'email
if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailField.value)) {
    emailField.setCustomValidity("Veuillez saisir une adresse email valide.");
    return false;
}

// Vérification du massage
if (messageField.value.trim() === "") {
    messageField.setCustomValidity("Veuillez saisir votre message.");
    return false;
}

// ========== Affichage message d'erreur du formulaire ========== //


