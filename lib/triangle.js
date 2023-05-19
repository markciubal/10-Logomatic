let Shape = require('./shape.js');

class Triangle extends Shape {
    constructor(size, label) {
        super(size, label);
        if (typeof size === 'undefined') {
            throw new Error('Triangle size must be defined.');
        }
        if (label.length === 'undefined' || label.length > 3) {
            throw new Error("Label must be more than 0, but less than 3 characters.");
        }
    }
}

module.exports = Triangle;