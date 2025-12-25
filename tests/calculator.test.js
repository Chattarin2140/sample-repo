const { add, subtract, multiply, divide } = require('../src/calculator');

describe('Calculator', () => {

    describe('add()', () => {
        test('should correctly add two positive numbers', () => {
            expect(add(2, 3)).toBe(5);
        });

        test('should correctly add two negative numbers', () => {
            expect(add(-2, -3)).toBe(-5);
        });

        test('should correctly add a number with zero', () => {
            expect(add(5, 0)).toBe(5);
        });

        test('should return zero when adding zero and zero', () => {
            expect(add(0, 0)).toBe(0);
        });
    });

    describe('subtract()', () => {
        test('should correctly subtract two numbers', () => {
            expect(subtract(5, 3)).toBe(2);
        });

        test('should return negative result when minuend is smaller', () => {
            expect(subtract(3, 5)).toBe(-2);
        });
    });

    describe('multiply()', () => {
        test('should correctly multiply two positive numbers', () => {
            expect(multiply(4, 3)).toBe(12);
        });

        test('should return zero when multiplying by zero', () => {
            expect(multiply(7, 0)).toBe(0);
        });

        test('should correctly multiply a negative and a positive number', () => {
            expect(multiply(-4, 3)).toBe(-12);
        });
    });

    describe('divide()', () => {
        test('should correctly divide two numbers', () => {
            expect(divide(10, 2)).toBe(5);
        });

        test('should correctly divide and return a decimal value', () => {
            expect(divide(5, 2)).toBe(2.5);
        });

        test('should throw an error when dividing by zero', () => {
            expect(() => divide(10, 0)).toThrow('Cannot divide by zero');
        });
    });

});
