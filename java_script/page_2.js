function openForm() {
    document.getElementById("popupForm").style.display = "block";
}

function closeForm() {
    document.getElementById("popupForm").style.display = "none";
}


/* --- COKTAIL PAR SON NOM --- */
function getRandomCocktail() {
  fetch('www.thecocktaildb.com/api/json/v1/1/search.php?s')
  .then(response => response.json())
  .then(data => {
    // Extraire les infos de l'API
    const cocktail = data.drinks[0];
    console.log(data);
    const name = cocktail.strDrink;
    const instructions = cocktail.strInstructions;
    const imageURL = cocktail.strDrinkThumb;

    // Création de la nouvelle fenêtre
    let newWindow = window.open("", "Cocktail aléatoire", "height=500", "widht=500");

    // Ajout des informations dans la fenêtre
    newWindow.document.write('<h1>' + name + '</h1>');
    newWindow.document.write('<img src="' + imageURL + '" alt="' + name + '">');
    newWindow.document.write('<p>' + instructions + '</p>')
  });
}

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
    let newWindow = window.open("", "Cocktail aléatoire", "height=500", "widht=500");

    // Ajout des informations dans la fenêtre
    newWindow.document.write('<h1>' + name + '</h1>');
    newWindow.document.write('<img src="' + imageURL + '" alt="' + name + '">');
    newWindow.document.write('<p>' + instructions + '</p>')
  });
}

