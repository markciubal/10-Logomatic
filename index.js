const Shape = require("./lib/shape");
const Circle = require('./lib/circle');
const Square = require('./lib/square');
const Triangle = require('./lib/triangle');
const fs = require('fs');
const inquirer = require('inquirer');

class Logomatic {
    writeToFile = (filename, data) => {
        fs.writeFile(filename, data, function (error) {
            if (error) {
                console.error(error);
            } else { 
                console.log(`Successfully wrote to ${filename}.`);
            }
        })
    }
    promptLogo = () => {
        const questions = [
             {
                type: 'input',
                name: 'label',
                message: 'What label would you like to put on your logo? (3 characters max)'
            },
            {
                type: 'input',
                name: 'labelColor',
                message: 'What color would you like the label to be? (Use # prefix for hex codes)'
            },
            {
                type: 'list',
                name: 'shape',
                message: 'What shape would you like?',
                choices: [
                    {
                        name: 'Circle',
                        value: 'circle',
                        description: 'A license with no conditions whatsoever which dedicates works to the public domain. Unlicensed works, modifications, and larger works may be distributed under different terms and without source code.yarn is an awesome package manager',
                    },
                    {
                        name: 'Square',
                        value: 'square',
                        description: 'A short and simple permissive license with conditions only requiring preservation of copyright and license notices. Licensed works, modifications, and larger works may be distributed under different terms and without source code.',
                    },
                    {
                        name: 'Triangle',
                        value: 'triangle',
                        description: 'A short and simple permissive license with conditions only requiring preservation of copyright and license notices. Licensed works, modifications, and larger works may be distributed under different terms and without source code.',
                    }
                    
                ]
            },
            {
                type: 'input',
                name: 'shapeColor',
                message: 'What color would you like the shape to be? (Use # prefix for hex codes)'
            }
        ];
        inquirer
        .prompt(questions)
        .then((response) => {
            let shape = response.shape;
            let newShape;
            switch(shape) {
                case ('circle'):
                    newShape = new Circle(response.shapeColor, response.label, response.labelColor);
                    break;
                case ('square'):
                    newShape = new Square(response.shapeColor, response.label, response.labelColor);
                    break;
                case ('triangle'):
                    newShape = new Triangle(response.shapeColor, response.label, response.labelColor);
                    break;
                default:
                    newShape = new Circle(response.shapeColor, response.label, response.labelColor);
                }
                this.writeToFile('logo.svg', newShape.render());
                console.log(`Generated logo.svg.`);
        })
    }
}

const logo = new Logomatic;

logo.promptLogo();