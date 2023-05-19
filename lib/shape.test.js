let Shape = require('./shape.js');
let Circle = require('./circle.js');
let Square = require('./square.js');
let Triangle = require('./triangle.js');

describe('Shape', () => {
    describe('color', () => {
        it('should throw an error when the length of the color is undefined', () => {
            let shape = () => new Shape();
            let error = new Error('Color must be defined.');
            expect(shape).toThrowError(error);
        })
    })
})

describe('Circle', () => {
    describe('size', () => {
        it('should throw an error when the size of the circle is undefined', () => {
            let circle = () => new Circle();
            let error = new Error('Circle size must be defined.');
            expect(circle).toThrowError(error);
        })
    })
})

describe('Square', () => {
    describe('size', () => {
        it('should throw an error when the size of the square is undefined', () => {
            let square = () => new Square();
            let error = new Error('Square size must be defined.');
            expect(square).toThrowError(error);
        })
    })
})

describe('Triangle', () => {
    describe('size', () => {
        it('should throw an error when the size of the triangle is undefined', () => {
            let triangle = () => new Triangle();
            let error = new Error('Triangle size must be defined.');
            expect(triangle).toThrowError(error);
        })
    })
})