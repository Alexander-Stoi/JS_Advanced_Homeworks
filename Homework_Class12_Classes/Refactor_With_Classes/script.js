// Refactor
// Previous homework about inheritance refactor it (in a separate homework) with classes.

// In addition:

// make get/set for liveInSaltWater in AquaticAnimal, typeOfFur in TerrestrialAnimal and typeOfFood in WildAnimal
// add new properties in DomesticAnimal...The first one is hasOwner boolean value and price. In addtition add static ownerPrice method that in case any animal has owner should add addtional 1000 to it's price value


class Animal {
    constructor(name, age, latinName, numberOfLegs) {
        this.name = name;
        this.age = age;
        this.latinName = latinName;
        this.numberOfLegs = numberOfLegs;
    }

    printAnimal = () => console.log(`NAME: ${this.name}.${this.latinName}, AGE: ${this.age}, NUMBER OF LEGS ${this.numberOfLegs}`)
}

class AquaticAnimal extends Animal {
    constructor(name, age, latinName, numberOfLegs, type, liveInSaltWater) {
        super(name, age, latinName, numberOfLegs);
        this.type = type;
        this.liveInSaltWater = liveInSaltWater;
        this.liveInFreshWater = false;
    }
    changeLifeEnvironment = (type) => {
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

    set liveInSaltWater(waterType) {
        console.log(`We are setting the habitat of the Animal. Please wait...`)
        if (waterType !== `salt`)
            console.log(`The animal ${this.name} does not live in salt water`)
        else
            this._liveInSaltWater = true;


    }

    get liveInSaltWater() {
        console.log(`We are getting the habitat od the Animal. Please wait...`)
        return this._liveInSaltWater;
    }
}

let turtle = new AquaticAnimal(`SeaTurtle`, 80, `Chelonioidea`, 4, `Oceanic`, `salt`);

let crab = new AquaticAnimal(`Crab`, 2, `Cancer`, 10, `Sea`, `salt`)

console.log(`Turtle`, turtle);


turtle.changeLifeEnvironment(`fresh`);

console.log(`Crab`, crab);
turtle.changeLifeEnvironment(`salt`);



class FlyingAnimal extends Animal {
    constructor(name, age, latinName, numberOfLegs, type, favoriteFood, currentPlace) {
        super(name, age, latinName, numberOfLegs);
        this.type = type;
        this.favoriteFood = favoriteFood;
        this.currentPlace = currentPlace;
    }
    flyOut = (place) => {
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



class TerrestrialAnimal extends Animal {
    constructor(name, age, latinName, numberOfLegs, hasFur, typeOfFur) {
        super(name, age, latinName, numberOfLegs);
        this.hasFur = hasFur;
        this.typeOfFur = typeOfFur;
    }
    sound = () => console.log(`The Animal ${this.name} sounds IHAAA`)

    set typeOfFur(animalFur) {
        if (animalFur !== `short` && animalFur !== `long`)
            throw new Error(`Wrong type of Fur`)
        else
            this._typeOfFur = animalFur;
    }

    get typeOfFur() {
        return this._typeOfFur;
    }
}

let giraffe = new TerrestrialAnimal(`Giraffe`, 17, `Giraffa`, 4, true, `short`)

console.log(`Giraffe`, giraffe);




class WildAnimal extends TerrestrialAnimal {
    constructor(name, age, latinName, numberOfLegs, hasFur, typeOfFur, typeOfFood, favoriteFood) {
        super(name, age, latinName, numberOfLegs, hasFur, typeOfFur);
        this.typeOfFood = typeOfFood;
        this.favoriteFood = favoriteFood;
    }

    set typeOfFood(foodType) {
        if (foodType !== `carnivore` && foodType !== `herbivore` && foodType !== `omnivore`)
            throw new Error(`There is no such type`);
        else
            this._typeOfFood = foodType;
    }

    get typeOfFood() {
        return this._typeOfFood;
    }
}

let lion = new WildAnimal(`Lion`, 6, `Panthera leo`, 4, true, `short`, `carnivore`, `Buffalo`);

console.log(`Lion`, lion);



class DomesticAnimal extends TerrestrialAnimal {
    constructor(name, age, latinName, numberOfLegs, hasFur, typeOfFur, hasOwner, price) {
        super(name, age, latinName, numberOfLegs, hasFur, typeOfFur);
        this.hasOwner = hasOwner;
        this.price = price;

        if (hasOwner)
            this.price += 1000;
    }

    static addOwnerPrice(obj) {
        if (!obj.hasOwner) {
            obj.hasOwner = true;
            obj.price += 1000;
            console.log(`The ${obj.name} has Owner now and it costs ${obj.price}`)
        }
        else
            console.log(`The ${obj.name} already has owner and its price is ${obj.price}`)
    }
}

let cat1 = new DomesticAnimal(`Max`, 3, `Felis catus`, 4, true, `long`, true, 350)

console.log(`Domestic Cat1`, cat1);


let cat2 = new DomesticAnimal(`Macol`, 5, `Felis catus`, 3, true, `short`, false, 15)

console.log(`Domestic Cat2`, cat2);

DomesticAnimal.addOwnerPrice(cat1);
DomesticAnimal.addOwnerPrice(cat2);

