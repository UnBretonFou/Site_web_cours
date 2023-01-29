/* --- check chargement du fichier --- */
console.info('js/cocktails.js loaded');

document.addEventListener('prechange', function(event) {
  document.querySelector('ons-toolbar .center')
    .innerHTML = event.tabItem.getAttribute('label');
});

/* --- POPUP CONNEXION ---*/
function openForm() {
  document.getElementById("popupForm").style.display = "block";
}

function closeForm() {
  document.getElementById("popupForm").style.display = "none";
}


/* --- COKTAIL ALEATOIRE --- */
function getRandomCocktail(){
	fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php')
  .then(
    function(response) {
      if (response.status !== 200) {
        console.log("Il semblerait qu'il y est un problème : " +
          response.status);
        return;
      }

      // Examine the text in the response
      response.json().then(function(data) {
        //console.log(data);
        displayRandomCocktail(data);
      });
    }
  )
  .catch(function(err) {
    console.log('Fetch Error :-S', err);
  });
}

getRandomCocktail();

function displayRandomCocktail(cocktail){
	console.log(cocktail.drinks[0]);

	let drinkSection = document.querySelector('#drink-section');
	drinkSection.innerHTML = '';

	let drinkName = document.createElement('h2');
	drinkName.innerHTML = cocktail.drinks[0].strDrink;

	drinkSection.appendChild(drinkName);

	let img = document.createElement('img');
	img.src = cocktail.drinks[0].strDrinkThumb;

	drinkSection.appendChild(img);

	for(let i=1; i<16; i++){
		console.log();

		if(cocktail.drinks[0][`strIngredient${i}`] == null || cocktail.drinks[0][`strIngredient${i}`] == '' ){
			break;
		}

		let ingredient = document.createElement('ons-list-item');
		ingredient.innerHTML = cocktail.drinks[0][`strMeasure${i}`] + ': ' + cocktail.drinks[0][`strIngredient${i}`];

		drinkSection.appendChild(ingredient);
	}

	let card = document.createElement('ons-card');
	card.innerHTML = cocktail.drinks[0].strInstructions;

	drinkSection.appendChild(card);

}



/* --- refresh pour un nouveau cocktail --- */
ons.ready(function() {
  var pullHook = document.getElementById('pull-hook');

  pullHook.addEventListener('changestate', function(event) {
    var message = '';

    switch (event.state) {
      case 'initial':
        message = 'Pull to refresh';
        getRandomCocktail();
        break;
      case 'preaction':
        message = 'Release';
        break;
      case 'action':
        message = 'Loading...';
        break;
    }

    pullHook.innerHTML = message;
  });

  pullHook.onAction = function(done) {
    setTimeout(done, 1000);
  };
});