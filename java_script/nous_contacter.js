function sendEmail() {
        Email.send({
    Host : "smtp.gmail.com", //nom du domaine smtp
    Username : "ton.email@gmail.com",
    Password : "ton-mot-de-passe",
    To : "ton.email@gmail.com",
    From : document.getElementById("email").value, //récupérer l'email de l'expéditeur
    Subject : "Nouveau contact",
    Body : "nom" + document.getElementById("nom").value
        +"<br> prenom" + document.getElementById("prenom").value
        +"<br> email" + document.getElementById("nom").value
        +"<br> phone" + document.getElementById("phone").value
        +"<br> message" + document.getElementById("message").value
    }).then(
    message => alert("Message envoyé avec succès")
    );
}
// il faut un serveur smtp c'est pour ça que ça ne fonctionne pas 



var body = document.querySelector("body");

document.addEventListener("mousemove", function(event) {
    var x = event.clientX / window.innerWidth;
    var y = event.clientY / window.innerHeight;
    body.style.backgroundPosition = x * 100 + "% " + y * 100 + "%";
});

