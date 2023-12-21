const Shapes = require('../shapes.js');


describe ('Triangle', () => {
    it('should render a blue triangle logo', () => {
        const shape = new Triangle();
        shape.setColor("blue");
        expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
    })
});

describe ('Circle', () => {
    it('should render a red circle logo', () => {
        const shape = new Triangle();
        shape.setColor("red");
        expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
    })
});

describe ('Square', () => {
    it('should render a green square logo', () => {
        const shape = new Triangle();
        shape.setColor("green");
        expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
    })
});

