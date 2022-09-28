const triangulo = require('../codigo/Triangulos.js');

test.only('equilateros', () => {
  expect(triangulo(10,10,10)).toBe("Equilátero");
});

test('escaleno', () => {
    expect(triangulo(7,8,10)).toBe("Escaleno");
  });

test('Isósceles', () => {
    expect(triangulo(19,19,16)).toBe("Isósceles");
  });

