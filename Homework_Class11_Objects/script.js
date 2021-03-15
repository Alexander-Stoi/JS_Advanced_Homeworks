


function Animal(name, age, latinName, numberOfLegs) {
    this.name = name;
    this.age = age;
    this.latinName = latinName;
    this.numberOfLegs = numberOfLegs;
    this.printAnimal = () => console.log(`NAME: ${this.name}.${this.latinName}, AGE: ${this.age}, NUMBER OF LEGS ${this.numberOfLegs}`)
}

let whale = new Animal(`Moby Dick`, 44, `Cetacea`, 0);
let elephant = new Animal(`Dambo`, 65, `Loxodonta`, 4);
console.log(`Whale Animal:`, whale);
console.log(`Elephant Animal:`, elephant);
whale.printAnimal();
elephant.printAnimal();


function AquaticAnimal(type, name, age, latinName, numberOfLegs) {
    Object.setPrototypeOf(this, new Animal(name, age, latinName, numberOfLegs));
    this.type = type;
    this.liveInSaltWater = false;
    this.liveInFreshWater = false;

    this.changeLifeEnvironment = (type) => {
        if (type === `salt`) {
            this.liveInSaltWater = true;
            this.liveInFreshWater = false;
        }
        else if (type === `fresh`) {
            this.liveInSaltWater = false;
            this.liveInFreshWater = true;
        }
        else {
            this.liveInFreshWater = false;
            this.liveInSaltWater = false;
        }
    }
}

let turtle = new AquaticAnimal(`salt`, `SeaTurtle`, 80, `Chelonioidea`, 4);

let crab = new AquaticAnimal(`fresh`, `Crab`, 2, `Cancer`, 10)


console.log(`Turtle`, turtle);
turtle.changeLifeEnvironment(`fresh`);
console.log(`Turtle`, turtle);

console.log(`Crab`, crab);
turtle.changeLifeEnvironment(`salt`);





function FlyingAnimal(type, favoriteFood, currentPlace, name, age, latinName, numberOfLegs) {
    Object.setPrototypeOf(this, new Animal(name, age, latinName, numberOfLegs));
    this.type = type;
    this.favoriteFood = favoriteFood;
    this.currentPlace = currentPlace;

    this.flyOut = (place) => {
        if (place !== undefined && place !== null && place !== ``) {
            this.currentPlace = place;
        }
        else {
            throw new Error(`Wrong input for place`);
        }

    }
}

let eagle = new FlyingAnimal(`Carnivore`, `Wild rabbits`, `Yellowstone`, `Bald Eagle`, 7, `Aquila`, 2)

console.log(`Eagle before`, eagle);
eagle.flyOut(`Juta`);
console.log(`Eagle after`, eagle);



function TerrestrialAnimal(typeOfFur, name, age, latinName, numberOfLegs) {
    Object.setPrototypeOf(this, new Animal(name, age, latinName, numberOfLegs));
    this.typeOfFur = typeOfFur;
    this.hasFur = false;

    this.sound = (makeSound) => console.log(`The Animal ${this.name} sounds ${makeSound}`);
}

let giraffe = new TerrestrialAnimal(`short`, `Giraffe`, 17, `Giraffa`, 4)

console.log(`Giraffe`, giraffe);




function DomesticAnimal(ownerName, typeOfFur, name, age, latinName, numberOfLegs) {
    Object.setPrototypeOf(this, new TerrestrialAnimal(typeOfFur, name, age, latinName, numberOfLegs));
    this.ownerName = ownerName;
}

let cat = new DomesticAnimal(`Pero`, `fluffy`, `Max`, 3, `Felis catus`, 4)

console.log(`Domestic Cat`, cat);




function WildAnimal(typeOfFood, favoriteFood, typeOfFur, name, age, latinName, numberOfLegs) {
    Object.setPrototypeOf(this, new TerrestrialAnimal(typeOfFur, name, age, latinName, numberOfLegs));
    this.typeOfFood = typeOfFood;
    this.favoriteFood = favoriteFood;
}


let lion = new WildAnimal(`carnivore`, `Buffalo`, `short`, `Lion`, 6, `Panthera leo`, 4);

console.log(`Lion`, lion);


