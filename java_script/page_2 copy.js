function openForm() {
    document.getElementById("popupForm").style.display = "block";
}

function closeForm() {
    document.getElementById("popupForm").style.display = "none";
}


/* --- RECHERHCE PAR SON NOM --- */
// const input = document.getElementById("name");
// const submit = document.getElementById("submit");

// submit.addEventListener("click", function(event){
//   event.
// })

/* --- COKTAIL ALEATOIRE --- */
// function getRandomCocktail() {
//   fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php')
//   .then(response => response.json())
//   .then(data => {
//     // Extraire les infos de l'API
//     const cocktail = data.drinks[0];
//     console.log(data);
//     const name = cocktail.strDrink;
//     const instructions = cocktail.strInstructions;
//     const imageURL = cocktail.strDrinkThumb;

//     // Création de la nouvelle fenêtre
//     let newWindow = window.open("", "Cocktail aléatoire", "height=500", "widht=500");

//     // Créer le lien CSS
//     var link = newWindow.document.createElement("link");

//     // Realation CSS
//     link.rel = "stylesheet";
//     link.href = "C:/Users/CorentinLAFRANCHE/Github_depot/Site_web_cours/style/style_page_2.css";

//     // ajout dans la balise head
//     newWindow.document.head.appendChild(link);

//     // crée une div
//     let container = document.createElement('div');

//     // ajoute le contenu à la div
//     container.classList.add('cocktail-card');

//     // Ajout des informations dans la fenêtre
//     container.innerHTML = '<h1>' + name + '</h1>' +
//     '<img src="' + imageURL + '" alt="' + name + '">' +
//     '<p>' + instructions + '</p>';

//     newWindow.document.body.appendChild(container);
//   });
// }

/* --- COKTAIL ALEATOIRE _ modal --- */
const modal = document.querySelector(".modal");
const modalButton = document.querySelector(".modal-button");
const randomButton = document.querySelector("#random-cocktail");

modalButton.addEventListener("click", function (){
  getRandomCocktail();
  console.log("test");
  modal.style.display = "block";
});

modal.addEventListener("click", function(event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});

function getRandomCocktail(){
  fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php')
  .then((response) => response.json())
  .then((data) => {

    // Extraire les infos de l'api
    const cocktail = data.drinks[0];
    console.log(data);
    const name = cocktail.strDrink;
    const instructions = cocktail.strInstructions;
    const imageURL = cocktail.strDrinkThumb;

    // Ajout des infos dans le modal
    random-cocktail.innerHTML = '<h1>' + name + '</h1>' + '<img src="' + imageURL + '" alt="' + name + '">' + '<p>' + instructions + '</p>';
  });
}