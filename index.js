const inquirer = require("inquirer");
const fs = require("fs");

const {Triangle, Circle, Square} = require("./shapes");

function userPrompts() {
    inquirer
    .prompt([
        {
            type: "input",
            message: "Enter logo text, up to 3 characters.",
            name: text,
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
};