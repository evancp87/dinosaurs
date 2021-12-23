//  Dino Constructor function
class Dinosaur {
  constructor(species, diet, weight, height, where, when, fact, image) {
    this.species = species;
    this.diet = diet;
    this.weight = weight;
    this.height = height;
    this.where = where;
    this.when = when;
    this.fact = fact,
    this.image = image
  }

  //  Dino Compare Method 1


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

    //  Dino Compare Method 2

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

    //  Dino Compare Method 3

  compareDiet(personDiet) {
    if (personDiet === "herbivor") {
      return "You both enjoy a plant based diet!";
    } else if (personDiet === "carnivor") {
      return "You both are pure meat eaters!";
    } else if (personDiet === "omnivor") {
      return "You both have a balanced diet of meat and veg!";
    }
  }



  // randomize facts
  randomFacts = () => {
    let randomFactGenerator = Math.floor(Math.random() * 10);

    switch (randomFactGenerator) {
      case 2:
        return this.compareDiet;

      case 5:
        return this.compareWeight;

      case 7:
        return this.compareHeight;

      default:
        return this.fact;
    }
  };
}


let dinos = [];
fetch("./dino.json")
  .then((res) => res.json())
  .then((data) => {
    let dinos = data.Dinos;
    console.log(dinos);
    getDinos(dinos);
  });

  function getDinos(dinos) {
    dinos.map((dino) => console.log(dino));
  
  }


// const getDinos = async () => {
//   const fetchedJson = await fetch("./dino.json")
//   const data = await fetchedJson.json;
//   return data.Dinos
  
// }

// getDinos().then(data => {
//   console.log(data)
//   let dinos = data.forEach(dino => new Dinosaur(dino.species,
//     dino.diet,
//     dino.weight,
//     dino.height,
//     dino.where,
//     dino.when,
//     dino.fact,
//     dino.image))
// }).catch(error => {console.error(error);});

// getDinos().then(data => {
//   then((data) => {
//     let dinos =
//     //     let dinos = data.Dinos
//     //     console.log(dinos);
//     //     return dinos;
// })
// async function dinoData() {

//   const fetchData = await fetch("./dino.json")
//   const data = await fetchData.json;
//   console.log(data);
//   return data.Dinos;
//   }

//   const dinos= [];
//   window.onLoad = async () => {
//     const dinoArray = await dinoData();
    
//     dinoArray.map(item => {
//       const dino = new Dinosaur(
//         item.species,
//         item.weight,
//         item.height,
//         item.where,
//         item.when,
//         item.fact,
//         item.image
//         )
//         dinos.push(dino);

//       })
//     }


// dinoData = fetch("./dino.json")
//   .then((response) => response.json())
//   .then((data) => {
//     let dinos = data.Dinos
//     console.log(dinos);
//     return dinos;
//   })
//   .catch((error) => {
//     console.log(error);
//   });


// 
 
  

  // function dinoData ()
  // { 
  //   return fetch("./dino.json")
  //   .then((response) => response.json())
  //   .then((data) => {
  //     let dinos = data.Dinos;
  //     console.log(dinos);
  //     return dinos;
  //   })
  //   .catch((error) => {
  //     console.log('error', error);
  //   });
  // }

// console.log(dinoData);


// function getDinos(dinoData) {
//   let dinos = dinoData;
//   dinos.map((dino) => {
//     console.log(dino.species);
//     const dinoObj = new Dinosaur(
//       dino.species,
//       dino.weight,
//       dino.height,
//       dino.diet,
//       dino.fact
//     );
//     console.log(dinoObj);
//     return dinoObj
//   });
// }


// function getDinos(dinoData) {
//   let dinos = dinoData;
//   dinos.map((dino) => {
//     console.log(dino.species);
//     const dinoObj = new Dinosaur(
//       dino.species,
//       dino.weight,
//       dino.height,
//       dino.diet,
//       dino.fact
//     );
//     console.log(dinoObj);
//     return dinoObj
//   });
// }

// importing images into app.js


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

// let dinos = [];

// const dinoData = async () => {
// const fetchedData = await fetch("./dino.json")
// const data = await fetchedData.json;
// return data.Dinos;
// }

// TODO: get dinosaurs
//   let dinoArray = [];
// const dinosaurs = dinos.map(
//   (dino) => new Dinosaur(dino.species, dino.weight, dino.height, dino.diet, dino.fact)
// );
// }

// console.log(dinosaurs);

// Create Human Constructor

class Human {
  constructor(
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
    this.image = './images/human.png'
  }
}
// Use IIFE to get human data from form

// Create Human Object

// const getPerson =
function getPerson() {
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
  }
  
  const form = document.getElementById("dino-compare");
// generate dino tiles

// dinos.forEach(dino => {

// })

// generate human tile

// random tiles and facts




// using this with callback functions requires using .bind();  dinosaur.fact.bind(dinosaur);- can save as variable and pass into functions


// Generate Tiles for each Dino in Array

// Add tiles to DOM



// tileArray

//TODO: can use createElement- save as a variable and then element.classList.add('your-class');

// human should be index of 4

let dinoTiles =  () => {
  // local variable for dino data here?
  let tileArray;
  compareWeight(personObject);
  compareHeight(personObject);
  compareDiet(personObject);
  randomFacts(personObject);


// TODO: remember to change this
  const dinos =  getDinos();
  // dinos.map((dino) => 
  
  for (dino of dinos) {
    console.log(dino.species);
    const dinoGrid = getElementById("grid");
    const dinoTile = document.createElement("div");
    dinoTile.classList.add("grid-item");
    // let element = document.createElement("div");

    dinoTile.innerHTML(`<h3>${dino.species}</h3
 
  <p>${dino.fact}</p>
  <img src='images/${dino.species}.png'>`);

  if (dino.species === 'pigeon') {
    dinoTile.innerHTML(`<p>All birds are dinosaurs</p>`)
  }

    const humanTile = document.createElement("div");
    humanTile.classList.add("grid-item");

    humanTile.innerHTML(`<h3>${humanTile.name}</h3>
  <img src='images/${human}.png'`);
    dinos.splice(4, 0, humanTile);
    dinoGrid.appendChild(dinoTile);
    tileArray.push(dinoTile);
    const allTiles = [...tileArray, ...humanTile];
    console.log(allTiles);
  };
};



// TODO: spread operator let tiles = [...dinos, ...human]; or let tiles = dinos.concat.(human);


// remove method



// On button click, prepare and display infographic


// let btn = document.getElementById("btn");
// btn.addEventListener("click", (e) => {
//   e.preventDefault();
//   let removeForm = () => {
//     const formRemove = (document.getElementById("dino-compare").style.display =
//     "none");
//   };
//   removeForm();
//   const displayTiles = () => {
//   const showGrid = document.getElementById("grid").style.display = "block";
//   // dinoTiles();
//   };

//   getPerson();
//   displayTiles();
// });

// const dinoData = fetch("./dino.json")
//   .then((response) => response.json())
//   .then((data) => {
//     console.log(data)
//     let dinos = data.Dinos.map((dino) =>
//     new Dinosaur(
//       dino.species,
//       dino.weight,
//       dino.height,
//       dino.diet,
//       dino.where,
//       dino.when,
//       dino.fact, dino.image
//       )
     
//       )
      document.getElementById("btn").addEventListener("click", (e) => {
  //       const dinoData = fetch("./dino.json")
  // .then((response) => response.json())
  // .then((data) => {
  //   console.log(data)
  //   let dinos = data.Dinos.map((dino) =>
  //   new Dinosaur(
  //     dino.species,
  //     dino.weight,
  //     dino.height,
  //     dino.diet,
  //     dino.where,
  //     dino.when,
  //     dino.fact, dino.image
  //     )
     
  //     )
        e.preventDefault();
        let removeForm = () => {
          const formRemove = (document.getElementById("dino-compare").style.display =
          "none");
        };
        removeForm();
        const displayTiles = () => {
          const showGrid = document.getElementById("grid").style.display = "block";
          // dinoTiles();
        };
        // const human = new human;
        getPerson();
        dinoTiles()
;        displayTiles();
      });
      
    // }) 