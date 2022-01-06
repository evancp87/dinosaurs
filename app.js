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
  return result;
  }

  //  Dino Compare Method 2

  compareHeight(personHeight) {
    if (personHeight > this.height) {
      return `This dinosaur was ${Math.round(
        (personHeight - this.height) * 12
      )} inches shorter than you!`;
    } else if (personHeight === this.height) {
      return "This dinosaur was the same height as you!";
    } else if (personHeight < this.height) {
      return `This dinosaur was ${Math.round(
        (this.height - personHeight) * 12
      )} inches taller than you!`;
    }
    return result;
  }

  //  Dino Compare Method 3

  compareDiet(personDiet) {
    if (personDiet === "herbivor") {
      return "You both enjoy a plant based diet!";
    } else if (personDiet === "carnivor") {
      return "You're both pure meat eaters 🍔 🍗 🥩!";
    } else if (personDiet === "omnivor") {
      return "You both have a balanced diet of 🥩 and 🥦!";
    }
    return result;
  }

  // randomize facts
//   randomFacts = () => {
//     let randomFactGenerator = Math.floor(Math.random() * 10);
//     // function randomNum(min, max) {
//    // return Math.floor(Math.random() * (max - min + 1) ) + min;
//   //}

//     switch (randomFactGenerator) {
//       case 3:
//         return this.compareDiet();
//         break;

//       case 5:
//         return this.compareWeight();
// break;
//       case 7:
//         return this.compareHeight();
// break;
//       default:
//         return this.fact;
//     }
//   };
}




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
    console.log(data)
    return data.Dinos.map((dino) => 
    new Dinosaur(
      dino.species,
      dino.weight,
      dino.height,
      dino.diet,
      dino.where,
      dino.when,
      dino.fact, 
      dino.image
      )
    
      )
    }
  ).catch(error => {console.log(error)})




// Create Dino Objects

// IIFE that fetches the dinosaur data from the dino.json

//
// Create Human Constructor

class Human {
  constructor(name, feet, inches, height, weight, diet) {
    this.name = name;
    this.species = "human";
    this.feet = feet;
    this.inches = inches;
    this.height = height;
    this.weight = weight;
    this.diet = diet;
    this.image = "./images/human.png";
  }
}
// Use IIFE to get human data from form

// Create Human Object


// Add tiles to DOM

// tileArray


// Generate Tiles for each Dino in Array
const dinoTiles = (personData) => {

 
  getDinos.then(dinos => {
    // dinos.splice(0,4, personData);
   dinos.map(dino => { 
     
     if (dino.species === 'human') {
       return dino.species = personData.name;
      } else if (dino.species === 'pigeon') {
        return dino.fact = 'All dinosaurs are living dinosaurs';
      }
      
      let randomFactGenerator = Math.floor(Math.random() * 10);
      // function randomNum(min, max) {
        // return Math.floor(Math.random() * (max - min + 1) ) + min;
        //}
        
       
          
          // switch (randomFactGenerator) {
          //   case 3:
          //      dino.compareDiet(personData);
          //     break;
              
          //     case 5:
          //        dino.compareWeight(personData);
          //       break;
          //       case 7:
          //         return dino.compareHeight(personData);
          //         default:
          //            dino.fact;
          //         }
          //         ;
  
                
                
                
                
                // TODO: remember to change this
                
                const dinoGrid = document.getElementById("grid");
                const dinoTile = document.createElement("div");
                dinoTile.classList.add("grid-item");
                
                dinoTile.innerHTML = `<h3>${dino.species}</h3>
                <img src='../images/${dino.image}.png}' alt='${dino.species} image'>
               
                <p>${dino.fact}</p>`;
                dinoGrid.appendChild(dinoTile);
                
                if (dino.species === "pigeon") {
                  dinoTile.innerHTML = `<p>All birds are dinosaurs</p>`;
                } else if (dino.species === 'human') {
                  dinoTile.innerHTML = `<h3>${humanTile.name}</h3>
                  <img src='images/${humanTile}.png'`
                }
                
                const humanTile = document.createElement("div");
                humanTile.classList.add("grid-item");
                
                // humanTile.innerHTML(`<h3>${humanTile.name}</h3>
                // <img src='images/${humanTile}.png'`);
                dinoGrid.appendChild(dinoTile);
                // dinoGrid.splice(4, 0, humanTile);
                // tileArray.push(dinoArrays);
                // const allTiles = [...tileArray, ...humanTile];
                // console.log(allTiles);
              })
            })
              
            };
            
            
// Get human data from form 

function getPersonData() {
  const personName = document.getElementById("name").value;
  const personHeight = Number(document.getElementById("feet").value) * 12 + Number(document.getElementById("inches").value);
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

// TODO: spread operator let tiles = [...dinos, ...human]; or let tiles = dinos.concat.(human);



// On button click, prepare and display infographic
document.getElementById("btn").addEventListener("click", (e) => {
  
  e.preventDefault();
  let removeForm = () => {
    const formRemove = (document.getElementById("dino-compare").style.display =
      "none");
  };
  removeForm();
  
  const human = getPersonData();
  dinoTiles(human);
});


