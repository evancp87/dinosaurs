let dinos = [];

// (const dinoData = async () => {
// await fetch("dino.json").then(response => response.json()).then(data => {
//     let dinos = data.dinos;
//     return dinos;
//     console.log(dinos);
// })})();

(async function (){
   dinoData = await fetch("dino.json").then(response => response.json()).then(data => {
        let dinos = data.Dinos;
        console.log(dinos);
        return dinos;
        
    })})();

// Create Dino Constructor
function Dinosaur(species, diet, weight, height, where, when, fact, image) {
  this.species = species;
  this.diet = diet;
  this.weight = weight;
  this.height = height;
  this.where = where;
  this.when = when;
  this.fact = function () {
      `${this.species} likes to eat ${this.diet}`;
  }
  this.image = image;
}


// Dinosaur.prototype.fact = function () {

// }
// using this with callback functions requires using .bind();  dinosaur.fact.bind(dinosaur);- can save as variable and pass into functions

// .call or .apply to borrow a function from dinosaur and use on human object? or a mixin?- doesn't add to prototype chain- Object.assign() adds to the target object by merging in the source object(s). Consider the following:

// let target = {};

// let source = { number: 7 };

// Object.assign(target, source);

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

let tRex = new Dinosaur();

console.log(tRex);
// Create Dino Objects



console.log(dinos);


// Object.values(dinos);

// Create Human Object


// const human = Object.create(Dinosaur);

function Human(species, personName, diet, weight, feet, inches, image) {
  this.species = species;
  this.name = personName;
  this.diet = diet;
  this.weight = weight;
  this.feet = feet;
  this.inches = inches;
  this.image = image;
}

let brian = new Human();

console.log(brian);
// Use IIFE to get human data from form

// forEach

(function () {
  const personName = document.getElementById("name").value;
  const feet = document.getElementById("feet").value;
  const inches = document.getElementById("inches").value;
  const weight = document.getElementById("weight").value;
  const diet = document.getElementById("diet").value;
})();
// Create Dino Compare Method 1
// NOTE: Weight in JSON file is in lbs, height in inches.
// else if statement

// else if statment

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
const button = document.getElementById("btn").value;

const grid = document.getElementById("grid");

// append or createElement

// grid.createElement("div").append("grid");

// forEach(el => {
// }

// Remove form from screen

function displayTiles() {
  grid.innerHTML = "";
}

const form = document.getElementById("dino-compare");

const removeForm = (e) => {
  e.preventDefault();
  form.remove();
};

// remove method

// On button click, prepare and display infographic

btn.addEventListener("click", displayTiles, removeForm);
