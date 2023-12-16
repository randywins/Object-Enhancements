//Object Enhancements
//Randy Nguyen

//Same keys and Values ES2015
function createInstructor(firstName, lastName){
    return {
        firstName,
        lastName
    }
}

//Computed Property Names ES2015
let favoriteNumber = 42;

const instructor = {
    firstName: "colt",
    [favoriteNumber]: "That is my favorite!"
}

//Object Methods ES2015
const instructor2 = {
    firstName: "Colt", 
    sayHi(){
        return "Hi!";
    },
    sayBye(){
        return this.firstName + " says bye!";
    }
}

//createAnimal function
const d = createAnimal("dog", "bark", "Woooof!")
d.bark()

const s = createAnimal("sheep", "bleet", "BAAAAaaaa")
s.bleet()

function createAnimal(species, verb, noise){
    return {
        species,
        [verb](){
            return noise;
        }
    }
}