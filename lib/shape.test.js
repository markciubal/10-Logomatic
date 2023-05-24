let Shape = require('./shape.js');
let Circle = require('./circle.js');
let Square = require('./square.js');
let Triangle = require('./triangle.js');

describe('Shape', () => {
    describe('color', () => {
        it('should throw an error when the length of the color is undefined', () => {
            let label = 'AA'
            let shape = () => new Shape('', label, '#000000');
            let error = new Error('Color must be defined.');
            expect(shape).toThrowError(error);
        });
    });
    describe('label', () => {
        it('should throw an error when the label of the shape is undefined, or more than three characters', () => {
            let shape = () => new Shape('#FF0000', '', '#000000');
            let error = new Error("Label must be more than 0, but less than 3 characters.");
            expect(shape).toThrowError(error);
        });
    });
});

describe('Circle', () => {
    describe('label', () => {
        it('should throw an error when the label of the shape is undefined, or more than three characters', () => {
            let circle = () => new Circle('#000000', '', '#000000');
            let error = new Error("Label must be more than 0, but less than 3 characters.");
            expect(circle).toThrowError(error);
        })
    });
    describe('render', () => {
        it('should strict equal the string provided', () => {
            let circle = new Circle('#FF0000', 'ABC', '#000000');
            let render = circle.render()
            let expectString = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
  <circle cx="150" cy="100" r="80" fill="#FF0000" />
  <text x="150" y="115" font-size="60" text-anchor="middle" fill="#000000">ABC</text>
</svg>`;
            expect(render).toBe(expectString);
        });
    });
});

describe('Square', () => {
    describe('label', () => {
        it('should throw an error when the label of the shape is undefined, or more than three characters', () => {
            let square = () => new Square('#FF0000', '', '#000000');
            let error = new Error("Label must be more than 0, but less than 3 characters.");
            expect(square).toThrowError(error);
        })
    });
    describe('render', () => {
        it('should strict equal the string provided', () => {
            let circle = new Square('#FF0000', 'ABC', '#000000');
            let render = circle.render()
            let expectString = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    <polyon points="100 150 200 150 200 50 100 50" fill="#FF0000" />
    <text x="150" y="115" font-size="60" text-anchor="middle" fill="#000000">ABC</text>
</svg>`;
            expect(render).toBe(expectString);
        });
    });
});

describe('Triangle', () => {
    describe('label', () => {
        it('should throw an error when the label of the shape is undefined, or more than three characters', () => {
            let triangle = () => new Triangle('#FF0000', '', '#000000');
            let error = new Error("Label must be more than 0, but less than 3 characters.");
            expect(triangle).toThrowError(error);
        });
    });
    describe('render', () => {
        it('should strict equal the string provided', () => {
            let circle = new Triangle('#FF0000', 'ABC', '#000000');
            let render = circle.render()
            let expectString = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    <polygon points="150 50 215 125 85 125" fill="#FF0000" />
    <text x="150" y="115" font-size="60" text-anchor="middle" fill="#000000">ABC</text>
</svg>`;
            expect(render).toBe(expectString);
        });
    });
});