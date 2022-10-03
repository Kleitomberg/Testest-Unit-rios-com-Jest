const triangulo = require('../codigo/Triangulos.js');

describe.only('module 1', () => {

    test.only('primeiro', () => {
    expect(triangulo(1, 2,3)).toBe("Escalenox");
    });


    test('segundo', () => {
        expect(triangulo(10, 10,10)).toBe("Equilátero");
    });


    test('terceior', () => {
        expect(triangulo(3, 2,3)).toBe("Isósceles");
    });

});
