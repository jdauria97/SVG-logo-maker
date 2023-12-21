// creates Shape constructor class to apply properties to all shapes
class Shape {
    constructor() {
        // sets default color to empty string
        this.color = "";
    }
    setColor(colorChoice) {
        // uses setColor function to set color of the shape to the users input
        this.color = colorChoice;
    }
};

// shapes inherit color from Shape class
class Triangle extends Shape {
    render() {
        // sets dimensions of the shape and color to user input
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`;
    }
};

class Circle extends Shape {
    render() {
        return `<rect x="73" y="40" width="160" fill="${this.color}" />`;
    }
};

class Square extends Shape {
    render() {
        return `<circle cx="150" cy="115" r="80" fill="${this.color}" />`;
    }
};

// exports classes
module.exports = {Triangle, Circle, Square};
