// importing images into app.js

//  Dino Constructor function
class Dinosaur {
  constructor(species, diet, weight, height, where, when, fact) {
    this.species = species;
    this.diet = diet;
    this.weight = weight;
    this.height = height;
    this.where = where;
    this.when = when;
    (this.fact = fact),
      (this.image = "/images" + species.toLowerCase() + "png");
  }
  compareWeight(personWeight) {
    if (personWeight === this.weight) {
      return "You weigh the same as this dinosaur!";
    } else if (personWeight < this.weight) {
      return `This dinosaur weighed ${Math.round(
        this.weight - personWeight
      )} more than you!`;
    } else if (personWeight > this.weight) {
      return `This dinosaur weighed ${Math.round(
        personWeight - this.weight
      )} less pounds than you!`;
    }
  }

  compareHeight(personHeight) {
    if (personHeight > this.height) {
      return `This dinosaur was ${Math.round(
        (personHeight - this.height) * 12
      )} shorter than you!`;
    } else if (personHeight === this.height) {
      return "This dinosaur was the same height as you!";
    } else if (personHeight < this.height) {
      return `This dinosaur was ${Math.round(
        (this.height - personHeight) * 12
      )} taller than you!`;
    }
  }

  compareDiet(personDiet) {
    if (personDiet === "herbivor") {
      return "You both enjoy a plant based diet!";
    } else if (personDiet === "carnivor") {
      return "You both are pure meat eaters!";
    } else if (personDiet === "omnivor") {
      return "You both have a balanced diet of meat and veg!";
    }
  }
}

// TODO: spread operator to concat comparisons and facts

// Create Dino Objects



// IIFE that fetches the dinosaur data from the dino.json

// (async function dinoJsonData () {

//   dinoData = await fetch("./dino.json")
//   .then((response) => response.json())
//   .then((data) => {
//     let dinos = data.Dinos;
//     console.log(dinos);
//     return dinos;
//   });
// })();

dinoData = fetch("./dino.json")
  .then((response) => response.json())
  .then((data) => {
    let dinos = data.Dinos;
    console.log(dinos);
    return dinos;
  }).catch(error => {console.log(error);});

  console.log(dinoData);


// TODO: get dinosaurs
const dinosaurs = dinos.map(
  (dino) => new Dinosaur(dino.species, dino.weight, dino.height, dino.diet)
);

console.log(dinosaurs);

// Create Human Object

// Use IIFE to get human data from form

getPerson = (function getPerson() {
  const personName = document.getElementById("name").value;
  const personFeet = document.getElementById("feet").value;
  const personInches = document.getElementById("inches").value;
  const personHeight = personFeet * 12 + personInches;
  const personWeight = document.getElementById("weight").value;
  const personDiet = document.getElementById("diet").value;
  const personObject = new Human(
    personName,
    personFeet,
    personInches,
    personWeight,
    personHeight,
    personDiet
  );
  return personObject;
})();

class Human {
  constructor(
    species,
    personName,
    personDiet,
    personWeight,
    feet,
    inches,
    height
  ) {
    this.species = "human";
    this.name = personName;
    this.personDiet = personDiet;
    this.personWeight = personWeight;
    this.feet = feet;
    this.inches = inches;
    this.height = height;
    this.image = "/images" + species.toLowerCase() + "png";
  }
}

// generate dino tiles

// dinos.forEach(dino => {

// })
const getDinoTiles = (dinosaurs) => {
  // local variable here?- get element by id
  switch (species) {
    case "pigeon": {
      return "All Pigeons are Dinosaurs";
    }
  }
};
// generate human tile

// random tiles and facts Math.random(Math.floor)

// function that creates new Dinosaur()

// Dinosaur.prototype.fact = function () {

// }
// using this with callback functions requires using .bind();  dinosaur.fact.bind(dinosaur);- can save as variable and pass into functions

// .call or .apply to borrow a function from dinosaur and use on human object? or a mixin?- doesn't add to prototype chain- Object.assign() adds to the target object by merging in the source object(s). Consider the following:

// let target = {};

// let source = { number: 7 };

// Object.assign(target, source); or const newObject = Object.assign({}, source);

// console.log(target);

// const platypus = Object.assign({}, duck, beaver, otter);
// { number: 7 }
// const humanObject = {
// this.species = species,
// }
//
// Dinosaur.fact.call(humanObject)

// human constructor function

// function Dinosaur (species, weight, diet)
// {
//     this.species = species;
//     this.weight = weight;
//     this.diet = diet
//     this.fact = function () {
//         console.log(`A ${this.species} likes to eat ${this.diet}`)
//     };

// }

// randomised dinosaur with math.floor(math.random * )

// const human = Object.create(Dinosaur);

// Create Dino Compare Method 1
// NOTE: Weight in JSON file is in lbs, height in inches.
// else if statement
// Create Dino Compare Method 2
// NOTE: Weight in JSON file is in lbs, height in inches.
// else if statement

// Create Dino Compare Method 3
// NOTE: Weight in JSON file is in lbs, height in inches.
// else if statement

// Generate Tiles for each Dino in Array

// Add tiles to DOM

// Factory Functions
// A factory function is a function that returns an object, but isn't itself a class or constructor. As such, we invoke a factory function as a normal function without using the new operator. Using a factory function, we can easily create object instances without the complexity of classes and constructors!

// Check out the following Basketball() factory function:

// function Basketball(color) {
//   return {
//     color: color,
//     numDots: 35000
//   };
// }

// tileArray

//TODO: can use createElement- save as a variable and then element.classList.add('your-class');
let tileArray = [];

// human should be index of 4

let dinoTiles = () => {
  // local variable for dino data here?
  dinos.map((dinosaur) => {
    const dinoGrid = getElementById("grid");
    const dinoTile = document.createElement("div");
    dinoTile.classList.add("grid-item");
    // let element = document.createElement("div");

    dinoTile.innerHTML(`<h3>${dinosaur.species}</h3
  <p>${dinosaur.fact} </p>
  <p>${dinosaur.height}</p>
  <img src='images/${dinosaur.species}.png'>`);

    dinoGrid.appendChild(dinoTile);
  });
};

// let humanTile = (human) => {

let humanTile = (human) => {
  // dinos array variable
  const humanGrid = document.getElementById("grid");
  humanTile = document.createElement("div");
  humanTile.classList.add("grid-item");

  humanTile.innerHTML(`<h3>${humanTile.name}</h3>`);
  //     dinos.splice(4, 0, humanTile); or...
  // grid.createElement("div").appendChild(humanTile);
};

// let dinoFacts = {
//   Triceratops
// }

// TODO: randomise facts
//     const randomizeFact = (dinosaur, human) => {
// let randomNumber = Math.Floor(Math.random() * 4);
// switch (randomNumber) {
//   if (0) {

//   }
// }

//     }

// remove method

// for loop to generate tiles;

// On button click, prepare and display infographic

let removeForm = () => {
  const formRemove = (document.getElementById("dino-compare").style.display =
    "none");
};

const displayTiles = () => {
  const showGrid = (document.getElementById("grid").style.display = "block");
};

document.getElementById("btn").addEventListener("click", (e) => {
  e.preventDefault();
  removeForm();
  getPerson();
  displayTiles();
});
