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
function getRandomCocktail() {
  fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php')
  .then(response => response.json())
  .then(data => {
    // Extraire les infos de l'API
    const cocktail = data.drinks[0];
    console.log(data);
    const name = cocktail.strDrink;
    const instructions = cocktail.strInstructions;
    const imageURL = cocktail.strDrinkThumb;

   // Création de la nouvelle fenêtre
   let newWindow = window.open("", "Cocktail aléatoire", "max-height=100", "max-widht=250");

   // Ajout des balises HTML de base
   newWindow.document.write('<!DOCTYPE html><html><head></head><body></body></html>');

   var link = newWindow.document.createElement("link");

   // Realation CSS
   link.rel = "stylesheet";
   link.href = "../style/style_page_2.css";

    // ajout dans la balise head
    newWindow.document.head.appendChild(link);

    let parentContainer = document.createElement('div');
    parentContainer.id = "parent-container";

    let container_img = document.createElement('div');
    // ajoute le contenu à la div
    container_img.classList.add('cocktail-dom');
    // Ajout des informations dans la fenêtre
    container_img.innerHTML = '<h1>' + name + '</h1> <img class="image-dom" src="' + imageURL + '" alt="' + name + '">';
 
    let container_txt = document.createElement('div');
    container_txt.classList.add('cocktail-dom');
    container_txt.innerHTML = '<p class=text-dom>' + instructions + '</p>';
    
    parentContainer.appendChild(container_img);
    parentContainer.appendChild(container_txt);
    newWindow.document.body.appendChild(parentContainer);
  });
 }

 
