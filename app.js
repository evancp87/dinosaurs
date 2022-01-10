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
  if (human.diet === "herbivor") {
    this.diet = "You both enjoy a plant based diet!";
  } else if (human.diet === "omnivor") {
    this.diet = "You both have a balanced diet of 🥩 and 🥦!";
  } else if (human.diet === "carnivor") {
    this.diet = "You both like your 🍔 🍗 🥩!";
  } 
};


//  Dino Compare Method 2
Dinosaur.prototype.compareWeight = function (human) {
  if (human.weight === this.weight) {
    this.weight = "You weigh the same as this dinosaur!";
  } else if (human.weight < this.weight) {
    this.weight = `This dinosaur weighed ${Math.round(
      this.weight - human.weight
    )} more than you!`;
  } else if (human.weight > this.weight) {
    this.weight = `This dinosaur weighed ${Math.round(
      human.weight - this.weight
    )} less than you!`;
  }
};


//  Dino Compare Method 3
Dinosaur.prototype.compareHeight = function (human) {
  if (human.height > this.height) {
    this.height = `This dinosaur was ${Math.round(
      (human.height - this.height) * 12
    )} inches shorter than you!`;
  } else if (human.height === this.height) {
    this.height = "This dinosaur was the same height as you!";
  } else if (human.height < this.height) {
    this.height = `This dinosaur was ${Math.round(
      (this.height - human.height) * 12
    )} inches taller than you!`;
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

// Create Dino Objects

// IIFE that fetches the dinosaur data from the dino.json

//
// Create Human Constructor

class Human {
  constructor(name, height, weight, diet) {
    this.name = name;
    this.species = "human";
    // this.feet = feet;
    // this.inches = inches;
    this.height = height;
    this.weight = weight;
    this.diet = diet;
    this.image = "images/human.png";
    // this.image = 'human';
  }
}
// Use IIFE to get human data from form

// Create Human Object

// Add tiles to DOM

// tileArray

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

const randomFacts = (dino) => {
  const randomFactArray = [
    dino.compareDiet(),
    dino.compareHeight(),
    dino.compareWeight(),
    dino.fact,
  ];

  const randomFactGenerator = Math.floor(
    Math.random() * (randomFactArray.length - 1)
  );
  return randomFactArray[randomFactGenerator];
};

const shuffleTiles = (arr) => {
  arr.sort(() => Math.random() - 0.5);
};
// Generate Tiles for each Dino in Array



// On button click, prepare and display infographic
document.getElementById("btn").addEventListener("click", (e) => {
  e.preventDefault();
  let removeForm = () => {
    const formRemove = (document.getElementById("dino-compare").style.display =
      "none");
  };
  removeForm();


  const dinoTiles = (personData) => {
    getDinos.then((dinos) => {
      dinos.splice(4, 0, personData);
      dinos.map((dino) => {
        // let randomResult = '';
  
        // function compare() {
        // const compareDiet = dino.compareDiet(personData.diet);
        //  const compareWeight =  dino.compareWeight(personData.weight);
        //  const compareHeight = dino.compareHeight(personData.height);
        // }

        // TODO: look into this
        // if (dino.species === "human") {
        //   dino.species = personData.name;
        // } else if (dino.species === "pigeon") {
        //   dino.species = dino.species;
  
        // } 

        
        // else {
        //   let randomFactGenerator = Math.floor(Math.random() * 10);
        //         switch (randomFactGenerator) {
        //             case 3:
        //                randomResult = dino.compareDiet(personData.diet);
        //               break;
        //               case 5:
        //                 randomResult =  dino.compareWeight(personData.weight);
        //                 break;
        //                 case 7:
        //                   randomResult =  dino.compareHeight(personData.height);
        //                   default:
        //                      dino.fact;
        //                   }
        //                   ;
        // }
  
  
        const dinoGrid = document.getElementById("grid");
        const dinoTile = document.createElement("div");
        dinoTile.classList.add("grid-item");
  
        dinoTile.innerHTML = `<h3>${dino.species}</h3>
                  <img src='images/${dino.species || 'human'}.png' alt='${
          dino.species
        } image'>
                
                  <p>${dino.fact}</p>`;
                  // <p>${randomFacts(dino)}</p>
  
        if (dino.species === "pigeon") {
          dinoTile.innerHTML = `<p>All birds are dinosaurs</p>`;
        } else if (dino.species === "human") {
          dinoTile.innerHTML = `<h3>${personData.name}</h3>
                    `;
        }
  
  
        dinoGrid.appendChild(dinoTile);
        let dinoArray = dinos;
        // dinoArray.splice(4, 0, personData);
        shuffleTiles(dinoArray);
        // randomFacts(dino);
        // return newArray = [...dinos];
        return newArray = [...dinos, personData];
      });
    });
  };
  const human = getPersonData();
  dinoTiles(human);
});
