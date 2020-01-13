class Greeter {
    greeting: string
    constructor(message: string) {
        this.greeting = message
    }
    greet() {
        return 'hello' + this.greeting
    }
}

let greeter = new Greeter('world');
greeter.greet()

// 继承
class class_Animal {
    move(distance: number = 0) {
        console.log(`Animal moved ${distance}m.`)
    }
}

class class_Dog extends class_Animal {
    bark() {
        console.log('Woof! Woof!')
    }
}

const dog = new class_Dog()
dog.bark()
dog.move(10)