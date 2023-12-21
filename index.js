// DEPENDENCIES
const inquirer = require("inquirer");
const fs = require("fs");

const {Triangle, Circle, Square} = require("./shapes");

// generates user prompt questions
function userPrompts() {
    inquirer
    // asks parameters for log styling
    .prompt([
        {
            type: "input",
            message: "Enter logo text, up to 3 characters.",
            name: "text",
        },
        {
            type: "input",
            message: "Enter text color, either keyword or hexadecimal value.",
            name: "textColor",
        },
        {
            type: "list",
            message: "Choose logo shape.",
            choices: ["Triangle", "Circle", "Square"],
            name: "shape",
        },
        {
            type: "input",
            message: "Enter shape color, either keyword or hexadecimal value.",
            name: "shapeColor",
        }
    ])
    // if parameters are met, runs the createSvgFile functions with answers as set parameters 
    .then((answers) => {
        if(answers.text.length > 3) {
            console.log("Text length limited to 3 characters.");
            prompt();
        } else {
            createSvgFile("logo.svg", answers);
        };
    });
};

// generates the logo.svg file
function createSvgFile (fileName, answers) {
    // sets file data to empty string
    let svg = "";
    // sets dimensions for container
    svg = '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">';
    // tag for text to wrap input over shape
    svg += "<g>";
    // adds user prompt answers to svg file
    svg += `${answers.shape}`;

    // adds properties dependent on user shape choice
    let shapeChoice;
    if (answers.shape === "Triangle") {
      shapeChoice = new Triangle();
      svg += `<polygon points="150, 18 244, 182 56, 182" fill="${answers.shapeColor}"/>`;
    } else if (answers.shape === "Circle") {
        shapeChoice = new Circle();
        svg += `<circle cx="150" cy="115" r="80" fill="${answers.shapeColor}"/>`;        
    } else {
        shapeChoice = new Square();
        svg += `<rect x="73" y="40" width="160" height="160" fill="${answers.shapeColor}"/>`;
    };

    // formats text to be displayed over shape
    svg += `<text x="150" y="130" text-anchor="middle" font-size="40" fill="${answers.textColor}">${answers.text}</text>`;
    svg += "</g>";
    svg += "</svg>";

    // writes the file to the file system
    fs.writeFile(fileName, svg, (err) => {
        err ? console.log(err) : console.log("Generated logo.svg");
      });
};

// runs the prompt questions upon application run
userPrompts();
