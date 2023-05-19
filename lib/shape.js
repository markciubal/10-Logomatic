class Shape {
    constructor(color, label) {
        if (typeof color === 'undefined') {
            throw new Error('Color must be defined.');
        }
        if (label.length === 'undefined' || label.length > 3) {
            throw new Error("Label must be more than 0, but less than 3 characters.");
        }
    }
    }
}

module.exports = Shape;