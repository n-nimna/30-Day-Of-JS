// 01. Create an Animal class. The class will have name, age, color, legs properties and create different methods
class Animal {
    constructor(name, age, color, legs) {
        this.name = name;
        this.age = age;
        this.color = color;
        this.legs = legs;
    }

   // Method to get a description of the animal
    getDescription() {
        return `This animal is a ${this.color} ${this.name}, aged ${this.age} years old, and has ${this.legs} legs.`;
    }
   // Method to make the animal speak
    speak() {
        return `${this.name} makes a noise.`;
    }
   // Method to age the animal by a certain number of years
    ageBy(years) {
        this.age += years;
        return `${this.name} is now ${this.age} years old.`;
    }
   // Method to change the color of the animal
    changeColor(newColor) {
        this.color = newColor;
        return `${this.name} is now ${this.color}.`;
    }

   // Method to change the number of legs
    changeLegs(newLegs) {
        this.legs = newLegs;
        return `${this.name} now has ${this.legs} legs.`;
    }
}

// 02. Create a Dog and Cat child class from the Animal Class.
class Animal {
    constructor(name, age, color, legs) {
        this.name = name;
        this.age = age;
        this.color = color;
        this.legs = legs;
    }

    // Method to get a description of the animal
    getDescription() {
        return `This animal is a ${this.color} ${this.name}, aged ${this.age} years old, and has ${this.legs} legs.`;
    }

    // Method to make the animal speak
    speak() {
        return `${this.name} makes a noise.`;
    }

    // Method to age the animal by a certain number of years
    ageBy(years) {
        this.age += years;
        return `${this.name} is now ${this.age} years old.`;
    }

    // Method to change the color of the animal
    changeColor(newColor) {
        this.color = newColor;
        return `${this.name} is now ${this.color}.`;
    }

    // Method to change the number of legs
    changeLegs(newLegs) {
        this.legs = newLegs;
        return `${this.name} now has ${this.legs} legs.`;
    }
}

    
