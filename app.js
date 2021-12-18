// importing images into app.js

//  Dino Constructor function
function Dinosaur(species, diet, weight, height, where, when) {
  this.species = species;
  this.diet = diet;
  this.weight = weight;
  this.height = height;
  this.where = where;
  this.when = when;
  this.fact = function () {
    `${this.species} likes to eat ${this.diet}`;
  };
  this.image = "/images" + species.toLowerCase() + "png";
  this.compareWeight = function (personWeight) {
    if (personWeight === this.weight) {
      return "You weigh the same as this dinosaur!";
    } else if (personWeight < this.weight) {
      return `This dinosaur weighed ${
        this.weight - personWeight
      } more than you!`;
    } else if (personWeight > this.weight) {
      return `This dinosaur weighed ${
        personWeight - this.weight
      } less pounds than you!`;
    }
  };
  this.compareHeight = function (personHeight) {
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
  };
  this.compareDiet = function (personDiet) {
    if (personDiet === "herbivor") {
      return "You both enjoy a plant based diet!";
    } else if (personDiet === "carnivor") {
      return "You both are pure meat eaters!";
    } else if (personDiet === "omnivor") {
      return "You both have a balanced diet of meat and veg!";
    }
  };
}

// Create Dino Objects

// empty dinosaur array
let dinos = [];

// IIFE that fetches the dinosaur data from the dino.json

(async function () {
  dinoData = await fetch("dino.json")
    .then((response) => response.json())
    .then((data) => {
      let dinos = data.Dinos;
      console.log(dinos);
      return dinos;
    });
})();

// TODO: get dinosaurs
let getDinos = dinos.map((data) => {
  return {
    newDino: new Dinosaur(species, weight, height, diet),
  };
});

console.log(getDinos);

//TODO: helper function for inches

// Create Human Object

function Human(species, personName, personDiet, personWeight, feet, inches) {
  this.species = "human";
  this.name = personName;
  this.personDiet = personDiet;
  this.personWeight = personWeight;
  this.feet = feet;
  this.inches = inches;
  this.image = "/images" + species.toLowerCase() + "png";
}

// Use IIFE to get human data from form

(function getHuman() {
  const personName = document.getElementById("name").value;
  const personFeet = document.getElementById("feet").value;
  const personInches = document.getElementById("inches").value;
  const personWeight = document.getElementById("weight").value;
  const personDiet = document.getElementById("diet").value;
  const human = new Human(
    personName,
    personFeet,
    personInches,
    personWeight,
    personDiet
  );
  return human;
})();

// generate dino tiles
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

let randomNumber = Math.random(math.floor);
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
const button = document.getElementById("btn").value;

// tileArray

//TODO: can use createElement- save as a variable and then element.classList.add('your-class');
let tileArray = [];

// human should be index of 4


let dinoTiles = (dinosaur) => {
  // local variable for dino data here?

  for (let i = 0; i < dinos.length; i++) {
    const dinoGrid = getElementById("grid");
    const dinoTile = document.createElement("div");
    dinoTile.classList.add("grid-item");
    // let element = document.createElement("div");

    dinoTile.innerHTML(`<h3>${dinosaur.species}</h3
    <p>${dinosaur.fact} </p>
    <p>${dinosaur.height}</p>
    <img src='images/${dinosaur.species}.png'>`);

    dinoGrid.appendChild(dinoTile);
  }
};

// let humanTile = (human) => {
  
  let humanTile = (human) => {
  // dinos array variable
      const humanGrid = document.getElementById("grid");
      humanTile = document.createElement('div');
humanTile.classList.add("grid-item");

humanTile.innerHTML(`<h3>${humanTile.name}</h3>`);
//     dinos.splice(1, 0, humanTile); or...
// grid.createElement("div").appendChild(humanTile);

}



// TODO: randomise facts
//     const randomizeFact = (dinosaur, human) => {
let randomNumber = Math.Floor(Math.random() * 4);
// switch (randomNumber) {
//   if (0) {

//   }
// }

//     }


// remove method

// for loop to generate tiles;

// On button click, prepare and display infographic

let removeForm = (e) => {
  e.preventDefault();
  const formRemove = (document.getElementById("dino-compare").style.display =
    "none");
  const showGrid = (document.getElementById("grid").style.display = "block");
};
document.getElementById("btn").addEventListener("click", () => {
  removeForm();
  // displayTiles();
});
