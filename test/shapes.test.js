// imports shapes choices
const Shapes = require('../shapes.js');

// tests render function of each shape
describe ('Triangle', () => {
    it('should render a blue triangle logo', () => {
        const shape = new Shapes.Triangle();
        shape.setColor("blue");
        expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
    })
});
describe ('Circle', () => {
    it('should render a red circle logo', () => {
        const shape = new Shapes.Circle();
        shape.setColor("red");
        expect(shape.render()).toEqual('<rect x="73" y="40" width="160" fill="red" />');
    })
});
describe ('Square', () => {
    it('should render a green square logo', () => {
        const shape = new Shapes.Square();
        shape.setColor("green");
        expect(shape.render()).toEqual(`<circle cx="150" cy="115" r="80" fill="green" />`);
    })
});
