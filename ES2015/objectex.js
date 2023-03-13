// Same keys and values ES2015
function createInstructor(firstName, lastName){
  return {firstName, lastName}
}

// Computed Property Names ES2015
// const favoriteNumber = 42;
// const instructor = {
//   firstName: "Colt",
//   [favoriteNumber]: "That is my favorite!"
// }


const instructor = {
    firstName: "Colt",
    sayHi(){
      return "Hi!";
    },
    sayBye(){
      return this.firstName + "  says bye!";
    }
}

// createAnimal function

const d = createAnimal("dog", "bark", "Woooof!")
// {species: "dog", bark: ƒ}
d.bark()  //"Woooof!"

const s = createAnimal("sheep", "bleet", "BAAAAaaaa")
// {species: "sheep", bleet: ƒ}
s.bleet() //"BAAAAaaaa"
function createAnimal(species, verb, noise){
    return {
      species,
      [verb](){
        return noise;
      }
    }
}