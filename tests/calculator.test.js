const { add, subtract, multiply, divide } = require('../src/calculator');

describe('Calculator', () => {

    describe('add()', () => {
        test('should add two positive numbers', () => {
            expect(add(2, 3)).toBe(5);
        });

        test('should add two negative numbers', () => {
            expect(add(-2, -3)).toBe(-5);
        });

        test('should add number with zero', () => {
            expect(add(5, 0)).toBe(5);
        });
    });

    describe('subtract()', () => {
        test('should subtract two numbers', () => {
            expect(subtract(5, 3)).toBe(2);
        });

        test('should subtract resulting in negative number', () => {
            expect(subtract(3, 5)).toBe(-2);
        });
    });

    describe('multiply()', () => {
        test('should multiply two positive numbers', () => {
            expect(multiply(4, 3)).toBe(12);
        });

        test('should multiply by zero', () => {
            expect(multiply(7, 0)).toBe(0);
        });

        test('should multiply negative and positive number', () => {
            expect(multiply(-4, 3)).toBe(-12);
        });
    });

    describe('divide()', () => {
        test('should divide two numbers', () => {
            expect(divide(10, 2)).toBe(5);
        });

        test('should divide resulting in decimal', () => {
            expect(divide(5, 2)).toBe(2.5);
        });

        test('should throw error when dividing by zero', () => {
            expect(() => divide(10, 0)).toThrow();
        });
    });

});
