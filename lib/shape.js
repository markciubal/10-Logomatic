class Shape {
    constructor(shapeColor, label, labelColor) {
        this.shapeColor = shapeColor;
        this.label = label;
        this.labelColor = labelColor;
        if (typeof shapeColor === 'undefined' || shapeColor.length === 0) {
            throw new Error('Color must be defined.');
        }
        if (label.length === 'undefined' || label.length === 0 || label.length > 3) {
            throw new Error("Label must be more than 0, but less than 3 characters.");
        }
    }
}

module.exports = Shape;