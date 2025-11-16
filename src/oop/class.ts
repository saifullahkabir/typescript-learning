// OOP - class - object

// class Animal {
//     name: string;
//     species: string;
//     sound: string;

//     constructor(name: string, species: string, sound: string){
//         this.name = name;
//         this.species = species;
//         this.sound = sound;
//     };

//     makeSound() {
//         console.log(`${this.name} is making sound: ${this.sound}`);
//     }
// };

//* parameter properties

// Class: blueprint for creating objects
class Animal {
  // Using parameter properties (public)
  constructor(
    public name: string,
    public species: string,
    public sound: string
  ) {}

  // Method inside class
  makeSound() {
    console.log(`${this.name} is making sound: ${this.sound}`);
  }
}

// Creating objects from the class
const cat = new Animal("Cikho", "Cat", "mewwo mewwo");
console.log(cat);

const dog = new Animal("Dogesh", "Dog", "ghaw ghaw");

dog.makeSound();
