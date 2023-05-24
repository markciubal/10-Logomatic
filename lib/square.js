let Shape = require('./shape.js');

class Square extends Shape {
    constructor(shapeColor, label, labelColor) {
        super(shapeColor, label, labelColor);
        this.shapeColor = shapeColor;
        this.label = label;
        this.labelColor = labelColor;
        if (label.length > 3) {
            throw new Error("Label must be less than 3 characters.");
        }
    }
    render = () => {
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    <polyon points="100 150 200 150 200 50 100 50" fill="${this.shapeColor}" />
    <text x="150" y="115" font-size="60" text-anchor="middle" fill="${this.labelColor}">${this.label}</text>
</svg>`;
    }
}

module.exports = Square;