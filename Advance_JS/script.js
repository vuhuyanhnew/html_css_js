class Animal {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    sing() {
        return `${this.name} can sing`
    }
}
class Cat extends Animal {
    constructor(name, age, whiskerColor) {
        super(name, age)
        this.whiskerColor = whiskerColor;
    }
    whisker(){
        return `i have ${this.whiskerColor} whisker`
    }
}
const dog = new Animal("anh", 23)

console.log(dog, dog.sing())
const himang = new Cat("anhs", 2, "blue")
console.log(himang,himang.sing(), "   " ,himang.whisker())