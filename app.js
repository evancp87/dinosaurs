//  Dino Constructor function
class Dinosaur {
  constructor(species, diet, weight, height, where, when, fact, image) {
    this.species = species;
    this.diet = diet;
    this.weight = weight;
    this.height = height;
    this.where = where;
    this.when = when;
    this.fact = fact;
    this.image = image;
  }
}
//  Dino Compare Method 1

Dinosaur.prototype.compareDiet = function (human) {
  if (human.diet === "Herbavor" && this.diet === "herbavor") {
    this.diet = "You both enjoy a plant based diet!";
    return this.diet;
  } else if (human.diet === "Omnivor" && this.diet === "omnivor") {
    this.diet = "You both have a balanced diet of 🥩 and 🥦!";
    return this.diet;
  } else if (human.diet === "Carnivor" && this.diet === "carnivor") {
    this.diet = "You both like your 🍔 🍗 🥩!";
    return this.diet;
  } else {
    return this.fact;
  }
};

//  Dino Compare Method 2
Dinosaur.prototype.compareWeight = function (human) {
  if (human.weight === this.weight) {
    this.weight = "You weigh the same as this dinosaur!";
    return this.weight;
  } else if (human.weight < this.weight) {
    this.weight = `This dinosaur weighed ${Math.round(
      this.weight - human.weight
    )} lbs more than you!`;
    return this.weight;
  } else if (human.weight > this.weight) {
    this.weight = `This dinosaur weighed ${Math.round(
      human.weight - this.weight
    )} lbs less than you!`;
    return this.weight;
  }
};

//  Dino Compare Method 3
Dinosaur.prototype.compareHeight = function (human) {
  if (human.height > this.height) {
    this.height = `This dinosaur was ${Math.round(
      (human.height - this.height) * 12
    )} inches shorter than you!`;
    return this.height;
  } else if (human.height === this.height) {
    this.height = "This dinosaur was the same height as you!";
    return this.height;
  } else if (human.height < this.height) {
    this.height = `This dinosaur was ${Math.round(
      (this.height - human.height) * 12
    )} inches taller than you!`;
    return this.height;
  }
};

// const getDinos = async () => {
//   const fetchedData = await fetch("./dino.json");
//   const data = await fetchedData.json;
//   console.log(data);
//   return data;
// }

// fetch and create dino objects
const getDinos = fetch("./dino.json")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    return data.Dinos.map(
      (dino) =>
        new Dinosaur(
          dino.species,
          dino.diet,
          dino.weight,
          dino.height,
          dino.where,
          dino.when,
          dino.fact,
          dino.image
        )
    );
  })
  .catch((error) => {
    console.log(error);
  });

// Create Human Constructor

class Human {
  constructor(name, height, weight, diet) {
    this.name = name;
    this.species = "human";
    this.height = height;
    this.weight = weight;
    this.diet = diet;
    this.image = "images/human.png";
  }
}

// Get human data from form

function getPersonData() {
  const personName = document.getElementById("name").value;
  const personHeight =
    Number(document.getElementById("feet").value) * 12 +
    Number(document.getElementById("inches").value);
  const personWeight = document.getElementById("weight").value;
  const personDiet = document.getElementById("diet").value;
  const personObject = new Human(
    personName,
    personHeight,
    personWeight,
    personDiet
  );
  return personObject;
}

// random facts for comparisons
const randomFacts = (dino, human) => {
  const randomFactArray = [
    dino.compareWeight(human),
    dino.compareHeight(human),
    dino.compareDiet(human),
    dino.fact,
  ];

  const randomFactGenerator = Math.floor(
    Math.random() * (randomFactArray.length - 1)
  );
  return randomFactArray[randomFactGenerator];
};

// shuffle tiles function
const shuffleTiles = (arr) => {
  arr.sort(() => Math.random() - 0.5);
};

// On button click, prepare and display infographic
document.getElementById("btn").addEventListener("click", (e) => {
  e.preventDefault();
  let removeForm = () => {
    const formRemove = (document.getElementById("dino-compare").style.display =
      "none");
  };
  removeForm();

  // Generate Tiles for each Dino in Array
  const dinoTiles = (personData) => {
    getDinos.then((dinos) => {
      shuffleTiles(dinos);
      dinos.splice(4, 0, personData);
      dinos.map((dino) => {
        const dinoGrid = document.getElementById("grid");
        const dinoTile = document.createElement("div");
        dinoTile.classList.add("grid-item");

        if (dino.species === "Pigeon") {
          dinoTile.innerHTML = `<p>All birds are dinosaurs</p>
          <img src='images/${dino.species || "human"}.png' alt='${
            dino.species
          } image'> `;
        } else if (dino.species === "human") {
          dinoTile.innerHTML = `<h3>${personData.name}</h3>
          <img src='images/${dino.species || "human"}.png' alt='${
            dino.species
          } image'>      `;
        } else {
          dinoTile.innerHTML = `<h3>${dino.species}</h3>
                  <img src='images/${dino.species || "human"}.png' alt='${
            dino.species
          } image'>
                
       <p>${randomFacts(dino, dinos[4])}</p>`;
        }

        dinoGrid.appendChild(dinoTile);
        return (newArray = [...dinos, personData]);
      });
    });
  };

  // Add tiles to DOM
  const human = getPersonData();
  dinoTiles(human);
});
