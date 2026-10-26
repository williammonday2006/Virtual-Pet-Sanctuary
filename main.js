class Pet {
    constructor(name, type) {
        this.name = name;
        this.type = type;
    }

    describe() {
        return `I am a ${this.type} named ${this.name}.`;
    }
}

const pet1 = new Pet("Pikpik", "Bunny");
const pet2 = new Pet("Nova", "Dog");

console.log(pet1.describe());
console.log(pet2.describe());
