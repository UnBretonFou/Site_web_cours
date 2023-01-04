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
