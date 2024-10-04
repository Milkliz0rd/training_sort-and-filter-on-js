//ajout du titre en JS pour m'exercer et voir si JS était bien relié

const sectionAnimal = document.querySelector(".titre");
const titreAnimal = document.createElement("h1");
titreAnimal.innerText = "Les animaux"
sectionAnimal.appendChild(titreAnimal);

//exercice
const animals = [];

const animalInput = document.getElementById('animal-input');
const addButton = document.getElementById('add-button');
const sortButton = document.getElementById('sort-button');
const filterInput = document.getElementById('filter-input');
const animalList = document.getElementById('animal-list');

// Fonction pour afficher les animaux dans la liste
function displayAnimals(filteredAnimals) {
  // Vide la liste avant d'afficher les éléments
  animalList.innerHTML = '';
  
  // Parcourt le tableau et ajoute chaque animal à la liste
  filteredAnimals.forEach(animal => {
    const li = document.createElement('li');
    li.textContent = animal;
    animalList.appendChild(li);
  });
}

// Ajouter un animal
addButton.addEventListener('click', () => {
  const animal = animalInput.value.trim();
  if (animal) {
    animals.push(animal);
    animalInput.value = ''; // Réinitialise le champ texte
    displayAnimals(animals); // Affiche la liste actualisée
  }
});

// Trier les animaux
sortButton.addEventListener('click', () => {
  animals.sort();
  displayAnimals(animals); // Affiche la liste triée
});

// Filtrer les animaux par la première lettre
filterInput.addEventListener('input', () => {
  const filterLetter = filterInput.value.toLowerCase();
  const filteredAnimals = animals.filter(animal => 
    animal.toLowerCase().startsWith(filterLetter)
  );
  displayAnimals(filteredAnimals);
});
