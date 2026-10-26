class Pet {
    constructor(name, type) {
        this.name = name;
        this.type = type;
        this.hunger = 50;
    }

    describe() {
        return `I am a ${this.type} named ${this.name}.`;
    }

    feed() {
        this.hunger -= 10;
    }
}

const pet1 = new Pet("Pikpik", "Bunny");
const pet2 = new Pet("Nova", "Dog");

console.log(pet1.describe());
console.log(pet2.describe());
console.log("Pikpik's hunger:", pet1.hunger);
console.log("Nova's hunger:", pet2.hunger);
