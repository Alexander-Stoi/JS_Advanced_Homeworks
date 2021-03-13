// Bonus with Object.create();



let animal = {
    name: `animalName`,
    age: `animalAge`,
    latinName: `animalLatinName`,
    numberOfLegs: 4,
    print: function () {
        console.log(`NAME: ${animal.name}.${animal.latinName}, AGE: ${animal.age}, NUMBER OF LEGS ${animal.numberOfLegs}`)
    }

}

console.log(`Animal Object:`, animal);
console.log(`Animal Properties: Name: ${animal.name}, Age: ${animal.age}, Latin Name: ${animal.latinName}, Number Of Legs: ${animal.numberOfLegs}`);

animal.print();



let aquaticAnimal = Object.create(animal);
aquaticAnimal.type = `type`;
aquaticAnimal.liveInSaltWater = false;
aquaticAnimal.liveInFreshWater = false;
aquaticAnimal.changeLifeEnvironment = (type) => {
    if (type === `salt`) {
        aquaticAnimal.liveInSaltWater = true;
        aquaticAnimal.liveInFreshWater = false;
    }
    else if (type === `fresh`) {
        aquaticAnimal.liveInSaltWater = false;
        aquaticAnimal.liveInFreshWater = true;
    }
    else {
        aquaticAnimal.liveInFreshWater = false;
        aquaticAnimal.liveInSaltWater = false;
    }
}

console.log(`Aquatic Animal`, aquaticAnimal);
aquaticAnimal.changeLifeEnvironment(`salt`);
console.log(`Aquatic Animal After Change`, aquaticAnimal);


let flyingAnimal = Object.create(animal);
flyingAnimal.type = `type`;
flyingAnimal.favoriteFood = `FavoriteFood`;
flyingAnimal.currentPlace = `CurrentPlace`;
flyingAnimal.flyOut = (place) => {
    if (place !== undefined && place !== null && place !== ``) {
        flyingAnimal.currentPlace = place;
    }
    else {
        throw new Error(`Wrong input for place`);
    }

}

console.log(`Flying Animal`, flyingAnimal);
flyingAnimal.flyOut(`Mexico`);
console.log(`Flying animal after flying out`, flyingAnimal);


let terrestrialAnimal = Object.create(animal);
terrestrialAnimal.hasFur = false;
terrestrialAnimal.typeOfFur = `type of fur`;
terrestrialAnimal.sound = (makeSound) => console.log(`The Animal ${terrestrialAnimal.name} sounds ${makeSound}`);

console.log(`Terrestrial Animal`, terrestrialAnimal);
terrestrialAnimal.sound(`AF AF AF`);

let wildAnimal = Object.create(terrestrialAnimal);
wildAnimal.typeOfFood = `typeOfFood`;
wildAnimal.favoriteFood = `favoriteFood`;

console.log(`Whild Animal`, wildAnimal);



let domesticAnimal = Object.create(terrestrialAnimal);
domesticAnimal.name = `Name`;
domesticAnimal.ownerName = `ownerName`;

console.log(`Domestic Animal`, domesticAnimal);

