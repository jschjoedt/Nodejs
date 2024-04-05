// Create a class with a method returning a string
class HelloWorld {
    sayHello() {
        return "Hello World!";
    }

    add(a, b) {
        return a + b;
    }

    generateRandomNumber() {
        return Math.random();
    }
}

// Export the class
module.exports = { HelloWorld };