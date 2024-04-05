const { HelloWorld } = require('../index');

/**
 * Global variables
 */
let helloWorld;

beforeAll(() => {
    helloWorld = new HelloWorld();
});

describe('sayHello', () => {
    it('should be defined', () => {
        expect(helloWorld).toBeDefined();
    });

    it('should return "Hello World!"', () => {
        expect(helloWorld.sayHello()).toBe("Hello World!");
    });

    it('should return a string', () => {
        expect(typeof helloWorld.sayHello()).toBe('string');
    });
});

describe('add', () => {
    it('should add two numbers correctly', () => {
        const result = helloWorld.add(2, 3);
        expect(result).toBe(5);
    });

    it('should return a number', () => {
        const result = helloWorld.add(2, 3);
        expect(typeof result).toBe('number');
    });
});

describe('generateRandomNumber', () => {
    it('should generate a random number between 0 and 1', () => {
        const randomNumber = helloWorld.generateRandomNumber();
        expect(randomNumber).toBeGreaterThanOrEqual(0);
        expect(randomNumber).toBeLessThanOrEqual(1);
    });

    it('should return a number', () => {
        const randomNumber = helloWorld.generateRandomNumber();
        expect(typeof randomNumber).toBe('number');
    });
});