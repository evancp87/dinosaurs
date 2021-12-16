// importing images into app.js

// empty dinosaur array
let dinos = [];

// IIFE that fetches the dinosaur data from the dino.json

(async function (){
   dinoData = await fetch("dino.json").then(response => response.json()).then(data => {
        let dinos = data.Dinos;
        console.log(dinos);
        return dinos;    
    })})();

//  Dino Constructor function
function Dinosaur(species, diet, weight, height, where, when, image) {
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
  this.compareWeight = function (personWeight) {
    if (personWeight === this.weight) {
      return 'You weigh the same as this dinosaur!';
    } else if (personWeight < this.weight) {
      return `This dinosaur weighed ${this.weight - personWeight} more than you!`;

    } else if (personWeight > this.weight) {
      return `This dinosaur weighed ${personWeight - this.weight} less pounds than you!`;
    
    }

  };
  this.compareHeight = function (personHeight) {
    if (personHeight > this.height) {
      return `This dinosaur was ${Math.round((personHeight - this.height)*12)} shorter than you!`;
    }
    else if (personHeight === this.height) {
      return 'This dinosaur was the same height as you!';
    } else if (personHeight < this.height) {
      return `This dinosaur was ${Math.round((this.height - personHeight)*12)} taller than you!`;
    }

  };
  this.compareDiet = function (personDiet) {
if (personDiet === 'herbivor') {
  return 'You both enjoy a plant based diet!';

} else if (personDiet === 'carnivor') {
  return 'You both are pure meat eaters!';
} else if (personDiet === 'omnivor') {
  return 'You both have a balanced diet of meat and veg!';
}

}
}


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

let tRex = new Dinosaur();

console.log(tRex);
// Create Dino Objects



console.log(dinos);


// Object.values(dinos);

// Create Human Object



// randomised dinosaur with math.floor(math.random * )

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


// Use IIFE to get human data from form

(function () {
  const personName = document.getElementById("name").value;
  const feet = document.getElementById("feet").value;
  const inches = document.getElementById("inches").value;
  const weight = document.getElementById("weight").value;
  const diet = document.getElementById("diet").value;
})();





// const form = document.getElementById("dino-compare");

// Create Dino Compare Method 1
// NOTE: Weight in JSON file is in lbs, height in inches.
// else if statement

// const firstComparison = {
//     if (human.weight > === human.weight) {

//     }
// }


// const secondComparison = {
//     if (dinos.diet === human.diet) {

//     }
// }

// const thirdComparison = {
//     if (dinos.diet === human.height) {

//     }
// }

// else if statment

// Create Dino Compare Method 2
// NOTE: Weight in JSON file is in lbs, height in inches.
// else if statement

// Create Dino Compare Method 3
// NOTE: Weight in JSON file is in lbs, height in inches.
// else if statement

switch (statment) {
    
}

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



//  for (array of tileArray) {
//      const dino = Object.values(dinos).map(new Dinosaur(foo, bar);
//      tileArray.push(dino);

// `Object.values(dinos).forEach()
//  }
        // function for removing form

        let removeForm = () => {
            let form = document.getElementById('dino-compare').style.display = 'none';
        }
        button.addEventListener('click', removeForm)
        const grid = document.getElementById("grid");
        
        // append or createElement



        // loop through dino tiles

        let grid = document.getElementById('grid');
       
        let dinoTiles = (dinosaur) => {
            // local variable for dino data here?

            for (let i = 0; i <dinos.length; i++) {
                let dinoTile = document.createElement('section');
                let element = document.createElement('div');

                dinoTile.classList.add('grid-item');

                dinoTile.innerHTML(`<h3>${dinosaur.species}</h3
                <p>${dinosaur.fact} </p>
                <p>${dinosaur.height}</p>
                <img src='images/${dinosaur.species}.png`)
                

                // dinoTile.appendChild()

                
            }
        }
        
        
        // let humanTile = (human) => {
        //     let humanTile = document.createElement('section');
        humanTile.classList.add('grid-item');
        
        humanTile.innerHTML(`<h3>${humanTile.name}</h3>`)

        //     dinos.splice(1, 0, humanTile);

        // }



       
// grid.createElement("div").append("grid");

// forEach(el => {
// }

// Remove form from screen

function displayTiles() {
    // Object.values.map()
  grid.innerHTML = "";
}

const form = document.getElementById("dino-compare");

// const removeForm = (e) => {
//   e.preventDefault();
//   form.remove();
// };

// remove method

// for loop to generate tiles;

// On button click, prepare and display infographic

button.addEventListener("click", displayTiles);
form.addEventListener('submit', removeForm);
// button.addEventListener('submit',)
