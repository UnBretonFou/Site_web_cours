// Récupération des champs du formulaire
const form = document.getElementById('contact-form')
const surnameField = document.getElementById('nom')
const nameField = document.getElementById('prenom')
const emailField = document.getElementById('email')
const phoneField = document.getElementById('telephone')
const messageField = document.getElementById('motif')

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